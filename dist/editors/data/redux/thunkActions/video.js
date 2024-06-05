"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadVideo = exports.uploadTranscript = exports.uploadThumbnail = exports.uploadHandout = exports.updateTranscriptLanguage = exports.saveVideoData = exports.replaceTranscript = exports.parseVideoSharingSetting = exports.parseTranscripts = exports.parseLicense = exports.loadVideoData = exports.importTranscript = exports.determineVideoSources = exports.deleteTranscript = exports.default = void 0;
var _lodashEs = _interopRequireWildcard(require("lodash-es"));
var _2 = require("..");
var _utils = require("../../../utils");
var requests = _interopRequireWildcard(require("./requests"));
var _module = _interopRequireWildcard(require("./video"));
var _hooks = require("../../../containers/VideoEditor/components/VideoSettingsModal/components/DurationWidget/hooks");
var _api = require("../../services/cms/api");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable import/no-cycle */

const loadVideoData = (selectedVideoId, selectedVideoUrl) => (dispatch, getState) => {
  const state = getState();
  const blockValueData = state.app.blockValue.data;
  let rawVideoData = blockValueData.metadata ? blockValueData.metadata : {};
  const rawVideos = Object.values(_2.selectors.app.videos(state));
  if (selectedVideoId !== undefined && selectedVideoId !== null) {
    const selectedVideo = _lodashEs.default.find(rawVideos, video => {
      if (_lodashEs.default.has(video, 'edx_video_id')) {
        return video.edx_video_id === selectedVideoId;
      }
      return false;
    });
    if (selectedVideo !== undefined && selectedVideo !== null) {
      rawVideoData = {
        edx_video_id: selectedVideo.edx_video_id,
        thumbnail: selectedVideo.course_video_image_url,
        duration: selectedVideo.duration,
        transcriptsFromSelected: selectedVideo.transcripts,
        selectedVideoTranscriptUrls: selectedVideo.transcript_urls
      };
    }
  }
  const courseData = state.app.courseDetails.data ? state.app.courseDetails.data : {};
  let studioView = state.app.studioView?.data?.html;
  if (state.app.blockId.startsWith('lb:')) {
    studioView = state.app.studioView?.data?.content;
  }
  const {
    videoId,
    videoUrl,
    fallbackVideos
  } = _module.determineVideoSources({
    edxVideoId: rawVideoData.edx_video_id,
    youtubeId: rawVideoData.youtube_id_1_0,
    html5Sources: rawVideoData.html5_sources
  });

  // Use the selected video url first
  const videoSourceUrl = selectedVideoUrl != null ? selectedVideoUrl : videoUrl;
  const [licenseType, licenseOptions] = _module.parseLicense({
    licenseData: studioView,
    level: 'block'
  });
  // eslint-disable-next-line no-console
  console.log(licenseType);
  const transcripts = rawVideoData.transcriptsFromSelected ? rawVideoData.transcriptsFromSelected : _module.parseTranscripts({
    transcriptsData: studioView
  });
  const [courseLicenseType, courseLicenseDetails] = _module.parseLicense({
    licenseData: courseData.license,
    level: 'course'
  });
  const allowVideoSharing = _module.parseVideoSharingSetting({
    courseSetting: blockValueData?.video_sharing_options,
    blockSetting: rawVideoData.public_access
  });
  dispatch(_2.actions.video.load({
    videoSource: videoSourceUrl || '',
    videoId,
    fallbackVideos,
    allowVideoDownloads: rawVideoData.download_video,
    allowVideoSharing,
    videoSharingLearnMoreLink: blockValueData?.video_sharing_doc_url,
    videoSharingEnabledForCourse: blockValueData?.video_sharing_enabled,
    transcripts,
    selectedVideoTranscriptUrls: rawVideoData.selectedVideoTranscriptUrls,
    allowTranscriptDownloads: rawVideoData.download_track,
    showTranscriptByDefault: rawVideoData.show_captions,
    duration: {
      // TODO duration is not always sent so they should be calculated.
      startTime: (0, _hooks.valueFromDuration)(rawVideoData.start_time || '00:00:00'),
      stopTime: (0, _hooks.valueFromDuration)(rawVideoData.end_time || '00:00:00'),
      total: rawVideoData.duration || 0 // TODO can we get total duration? if not, probably dropping from widget
    },
    handout: rawVideoData.handout,
    licenseType,
    licenseDetails: {
      attribution: licenseOptions.by,
      noncommercial: licenseOptions.nc,
      noDerivatives: licenseOptions.nd,
      shareAlike: licenseOptions.sa
    },
    courseLicenseType,
    courseLicenseDetails: {
      attribution: courseLicenseDetails.by,
      noncommercial: courseLicenseDetails.nc,
      noDerivatives: courseLicenseDetails.nd,
      shareAlike: courseLicenseDetails.sa
    },
    thumbnail: rawVideoData.thumbnail
  }));
  dispatch(requests.fetchVideoFeatures({
    onSuccess: response => dispatch(_2.actions.video.updateField({
      allowThumbnailUpload: response.data.allowThumbnailUpload,
      videoSharingEnabledForAll: response.data.videoSharingEnabled
    }))
  }));
  const youTubeId = (0, _api.parseYoutubeId)(videoSourceUrl);
  if (youTubeId) {
    dispatch(requests.checkTranscriptsForImport({
      videoId,
      youTubeId,
      onSuccess: response => {
        if (response.data.command === 'import') {
          dispatch(_2.actions.video.updateField({
            allowTranscriptImport: true
          }));
        }
      }
    }));
  }
};
exports.loadVideoData = loadVideoData;
const determineVideoSources = _ref => {
  let {
    edxVideoId,
    youtubeId,
    html5Sources
  } = _ref;
  const youtubeUrl = `https://youtu.be/${youtubeId}`;
  let videoUrl;
  let fallbackVideos;
  if (youtubeId) {
    [videoUrl, fallbackVideos] = [youtubeUrl, html5Sources];
  } else if (Array.isArray(html5Sources) && html5Sources[0]) {
    [videoUrl, fallbackVideos] = [html5Sources[0], html5Sources.slice(1)];
  }
  return {
    videoId: edxVideoId || '',
    videoUrl: videoUrl || '',
    fallbackVideos: fallbackVideos || []
  };
};
exports.determineVideoSources = determineVideoSources;
const parseVideoSharingSetting = _ref2 => {
  let {
    courseSetting,
    blockSetting
  } = _ref2;
  switch (courseSetting) {
    case 'all-on':
      return {
        level: 'course',
        value: true
      };
    case 'all-off':
      return {
        level: 'course',
        value: false
      };
    case 'per-video':
      return {
        level: 'block',
        value: blockSetting
      };
    default:
      return {
        level: 'block',
        value: blockSetting
      };
  }
};
exports.parseVideoSharingSetting = parseVideoSharingSetting;
const parseTranscripts = _ref3 => {
  let {
    transcriptsData
  } = _ref3;
  if (!transcriptsData) {
    return [];
  }
  const cleanedStr = transcriptsData.replace(/&#34;/g, '"');
  const startString = '"transcripts": ';
  const endString = ', "youtube_id_0_75": ';
  const transcriptsJson = cleanedStr.substring(cleanedStr.indexOf(startString) + startString.length, cleanedStr.indexOf(endString));
  // const transcriptsObj = JSON.parse(transcriptsJson);
  try {
    const transcriptsObj = JSON.parse(transcriptsJson);
    return Object.keys(transcriptsObj.value);
  } catch (error) {
    if (error instanceof SyntaxError) {
      // eslint-disable-next-line no-console
      console.error('Invalid JSON:', error.message);
    } else {
      throw error;
    }
    return [];
  }
};

// partially copied from frontend-app-learning/src/courseware/course/course-license/CourseLicense.jsx
exports.parseTranscripts = parseTranscripts;
const parseLicense = _ref4 => {
  let {
    licenseData,
    level
  } = _ref4;
  if (!licenseData) {
    return [null, {}];
  }
  let license = licenseData;
  if (level === 'block') {
    const metadataArr = licenseData.split('data-metadata');
    metadataArr.forEach(arr => {
      const parsedStr = arr.replace(/&#34;/g, '"');
      if (parsedStr.includes('license')) {
        license = parsedStr.substring(parsedStr.indexOf('"value"'), parsedStr.indexOf(', "type"')).replace(/"value": |"/g, '');
      }
    });
  }
  if (!license || license.includes('null')) {
    return [null, {}];
  }
  if (license === 'all-rights-reserved') {
    // no options, so the entire thing is the license type
    return [license, {}];
  }
  // Search for a colon character denoting the end
  // of the license type and start of the options
  const colonIndex = license.lastIndexOf(':');
  // Split the license on the colon
  const licenseType = license.slice(0, colonIndex).trim();
  const optionStr = license.slice(colonIndex + 1).trim();
  const options = {};
  let version = '';

  // Set the defaultVersion to 4.0
  const defaultVersion = '4.0';
  optionStr.split(' ').forEach(option => {
    // Split the option into key and value
    // Default the value to `true` if no value
    let key = '';
    let value = '';
    if (option.indexOf('=') !== -1) {
      [key, value] = option.split('=');
    } else {
      key = option;
      value = true;
    }

    // Check for version
    if (key === 'ver') {
      version = value;
    } else {
      // Set the option key to lowercase to make
      // it easier to query
      options[key.toLowerCase()] = value;
    }
  });

  // Set the version to whatever was included,
  // using `defaultVersion` as a fallback if unset
  version = version || defaultVersion;
  return [licenseType, options, version];
};
exports.parseLicense = parseLicense;
const saveVideoData = () => (dispatch, getState) => {
  const state = getState();
  return _2.selectors.video.videoSettings(state);
};
exports.saveVideoData = saveVideoData;
const uploadThumbnail = _ref5 => {
  let {
    thumbnail,
    emptyCanvas
  } = _ref5;
  return (dispatch, getState) => {
    const state = getState();
    const {
      videoId
    } = state.video;
    const {
      studioEndpointUrl
    } = state.app;
    dispatch(requests.uploadThumbnail({
      thumbnail,
      videoId,
      onSuccess: response => {
        let thumbnailUrl;
        if (response.data.image_url.startsWith('/')) {
          // in local environments, image_url is a relative path
          thumbnailUrl = studioEndpointUrl + response.data.image_url;
        } else {
          // in stage and production, image_url is an absolute path to the image
          thumbnailUrl = response.data.image_url;
        }
        if (!emptyCanvas) {
          dispatch(_2.actions.video.updateField({
            thumbnail: thumbnailUrl
          }));
        }
      },
      // eslint-disable-next-line no-console
      onFailure: e => console.log({
        UploadFailure: e
      }, 'Resampling thumbnail upload')
    }));
  };
};

// Handout Thunks:
exports.uploadThumbnail = uploadThumbnail;
const uploadHandout = _ref6 => {
  let {
    file
  } = _ref6;
  return dispatch => {
    dispatch(requests.uploadAsset({
      asset: file,
      onSuccess: response => {
        const handout = response.data.asset.url;
        dispatch(_2.actions.video.updateField({
          handout
        }));
      }
    }));
  };
};

// Transcript Thunks:
exports.uploadHandout = uploadHandout;
const importTranscript = () => (dispatch, getState) => {
  const state = getState();
  const {
    transcripts,
    videoSource
  } = state.video;
  // Remove the placeholder '' from the unset language from the list of transcripts.
  const transcriptsPlaceholderRemoved = (0, _lodashEs.isEmpty)(transcripts) ? transcripts : (0, _utils.removeItemOnce)(transcripts, '');
  dispatch(requests.importTranscript({
    youTubeId: (0, _api.parseYoutubeId)(videoSource),
    onSuccess: response => {
      dispatch(_2.actions.video.updateField({
        transcripts: [...transcriptsPlaceholderRemoved, 'en']
      }));
      if (_2.selectors.video.videoId(state) === '') {
        dispatch(_2.actions.video.updateField({
          videoId: response.data.edx_video_id
        }));
      }
    }
  }));
};
exports.importTranscript = importTranscript;
const uploadTranscript = _ref7 => {
  let {
    language,
    file
  } = _ref7;
  return (dispatch, getState) => {
    const state = getState();
    const {
      transcripts,
      videoId
    } = state.video;
    // Remove the placeholder '' from the unset language from the list of transcripts.
    const transcriptsPlaceholderRemoved = (0, _lodashEs.isEmpty)(transcripts) ? transcripts : (0, _utils.removeItemOnce)(transcripts, '');
    dispatch(requests.uploadTranscript({
      language,
      videoId,
      transcript: file,
      onSuccess: response => {
        // if we aren't replacing, add the language to the redux store.
        if (!transcriptsPlaceholderRemoved.includes(language)) {
          dispatch(_2.actions.video.updateField({
            transcripts: [...transcriptsPlaceholderRemoved, language]
          }));
        }
        if (_2.selectors.video.videoId(state) === '') {
          dispatch(_2.actions.video.updateField({
            videoId: response.data.edx_video_id
          }));
        }
      }
    }));
  };
};
exports.uploadTranscript = uploadTranscript;
const deleteTranscript = _ref8 => {
  let {
    language
  } = _ref8;
  return (dispatch, getState) => {
    const state = getState();
    const {
      transcripts,
      videoId
    } = state.video;
    dispatch(requests.deleteTranscript({
      language,
      videoId,
      onSuccess: () => {
        const updatedTranscripts = transcripts.filter(langCode => langCode !== language);
        dispatch(_2.actions.video.updateField({
          transcripts: updatedTranscripts
        }));
      }
    }));
  };
};
exports.deleteTranscript = deleteTranscript;
const updateTranscriptLanguage = _ref9 => {
  let {
    newLanguageCode,
    languageBeforeChange
  } = _ref9;
  return (dispatch, getState) => {
    const state = getState();
    const {
      video: {
        transcripts,
        videoId
      }
    } = state;
    _2.selectors.video.getTranscriptDownloadUrl(state);
    dispatch(requests.getTranscriptFile({
      videoId,
      language: languageBeforeChange,
      onSuccess: response => {
        dispatch(requests.updateTranscriptLanguage({
          languageBeforeChange,
          file: new File([new Blob([response.data], {
            type: 'text/plain'
          })], `${videoId}_${newLanguageCode}.srt`, {
            type: 'text/plain'
          }),
          newLanguageCode,
          videoId,
          onSuccess: () => {
            const newTranscripts = transcripts.filter(transcript => transcript !== languageBeforeChange);
            newTranscripts.push(newLanguageCode);
            dispatch(_2.actions.video.updateField({
              transcripts: newTranscripts
            }));
          }
        }));
      }
    }));
  };
};
exports.updateTranscriptLanguage = updateTranscriptLanguage;
const replaceTranscript = _ref10 => {
  let {
    newFile,
    newFilename,
    language
  } = _ref10;
  return (dispatch, getState) => {
    const state = getState();
    const {
      videoId
    } = state.video;
    dispatch(requests.deleteTranscript({
      language,
      videoId,
      onSuccess: () => {
        dispatch(uploadTranscript({
          language,
          file: newFile,
          filename: newFilename
        }));
      }
    }));
  };
};
exports.replaceTranscript = replaceTranscript;
const uploadVideo = _ref11 => {
  let {
    supportedFiles,
    setLoadSpinner,
    postUploadRedirect
  } = _ref11;
  return dispatch => {
    const data = {
      files: []
    };
    setLoadSpinner(true);
    supportedFiles.forEach(file => {
      const fileData = file.get('file');
      data.files.push({
        file_name: fileData.name,
        content_type: fileData.type
      });
    });
    dispatch(requests.uploadVideo({
      data,
      onSuccess: async response => {
        const {
          files
        } = response.data;
        await Promise.all(Object.values(files).map(async fileObj => {
          const fileName = fileObj.file_name;
          const edxVideoId = fileObj.edx_video_id;
          const uploadUrl = fileObj.upload_url;
          const uploadFile = supportedFiles.find(file => file.get('file').name === fileName);
          if (!uploadFile) {
            // eslint-disable-next-line no-console
            console.error(`Could not find file object with name "${fileName}" in supportedFiles array.`);
            return;
          }
          const file = uploadFile.get('file');
          await fetch(uploadUrl, {
            method: 'PUT',
            headers: {
              'Content-Disposition': `attachment; filename="${file.name}"`,
              'Content-Type': file.type
            },
            multipart: false,
            body: file
          }).then(resp => {
            if (!resp.ok) {
              throw new Error('Failed to connect with server');
            }
            postUploadRedirect(edxVideoId);
          })
          // eslint-disable-next-line no-console
          .catch(error => console.error('Error uploading file:', error));
        }));
        setLoadSpinner(false);
      }
    }));
  };
};
exports.uploadVideo = uploadVideo;
var _default = exports.default = {
  loadVideoData,
  determineVideoSources,
  parseLicense,
  saveVideoData,
  uploadThumbnail,
  importTranscript,
  uploadTranscript,
  deleteTranscript,
  updateTranscriptLanguage,
  replaceTranscript,
  uploadHandout,
  uploadVideo
};
//# sourceMappingURL=video.js.map