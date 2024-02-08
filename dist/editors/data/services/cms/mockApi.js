"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadAsset = exports.saveBlock = exports.normalizeContent = exports.importTranscript = exports.fetchVideoFeatures = exports.fetchStudioView = exports.fetchCourseDetails = exports.fetchByUnitId = exports.fetchBlockById = exports.fetchAssets = exports.fetchAdvanceSettings = exports.emptyMock = exports.checkTranscripts = void 0;
var urls = _interopRequireWildcard(require("./urls"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* istanbul ignore file */
const mockPromise = returnValue => new Promise(resolve => resolve(returnValue));

// TODO: update to return block data appropriate per block ID, which will equal block type
// eslint-disable-next-line
const fetchBlockById = _ref => {
  let {
    blockId,
    studioEndpointUrl
  } = _ref;
  let data = {};
  if (blockId === 'html-block-id') {
    data = {
      data: `<problem>
      </problem>`,
      display_name: 'My Text Prompt',
      metadata: {
        display_name: 'Welcome!',
        download_track: true,
        download_video: true,
        edx_video_id: 'f36f06b5-92e5-47c7-bb26-bcf986799cb7',
        html5_sources: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
        show_captions: true,
        sub: '',
        track: '',
        transcripts: {
          en: {
            filename: 'my-transcript-url'
          }
        },
        xml_attributes: {
          source: ''
        },
        youtube_id_1_0: 'dQw4w9WgXcQ'
      }
    };
  } else if (blockId === 'problem-block-id') {
    data = {
      data: `<problem>
    </problem>`,
      display_name: 'Dropdown',
      metadata: {
        markdown: `You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown problems. Edit this component to replace this template with your own assessment.
        >>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<
        [[
        an incorrect answer
        (the correct answer)
        an incorrect answer
        ]]`,
        attempts_before_showanswer_button: 7,
        max_attempts: 5,
        show_reset_button: true,
        showanswer: 'after_attempts',
        submission_wait_seconds: 15,
        weight: 29
      }
    };
  } else if (blockId === 'game-block-id') {
    data = {
      display_name: 'Game Block'
      // TODO: insert mock data from backend here
    };
  }
  return mockPromise({
    data: _objectSpread({}, data)
  });
};

// TODO: update to return block data appropriate per block ID, which will equal block type
// eslint-disable-next-line
exports.fetchBlockById = fetchBlockById;
const fetchByUnitId = _ref2 => {
  let {
    blockId,
    studioEndpointUrl
  } = _ref2;
  return mockPromise({
    data: {
      ancestors: [{
        id: 'unitUrl'
      }]
    }
  });
};
// eslint-disable-next-line
exports.fetchByUnitId = fetchByUnitId;
const fetchAssets = _ref3 => {
  let {
    learningContextId,
    studioEndpointUrl
  } = _ref3;
  return mockPromise({
    data: {
      assets: [{
        displayName: 'shahrukh.jpg',
        contentType: 'image/jpeg',
        dateAdded: 'Jan 05, 2022 at 17:38 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@shahrukh.jpg',
        externalUrl: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@shahrukh.jpg',
        portableUrl: '/static/shahrukh.jpg',
        thumbnail: '/asset-v1:edX+test101+2021_T1+type@thumbnail+block@shahrukh.jpg',
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@shahrukh.jpg'
      }, {
        displayName: 'IMG_5899.jpg',
        contentType: 'image/jpeg',
        dateAdded: 'Nov 16, 2021 at 18:55 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@IMG_5899.jpg',
        externalUrl: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@IMG_5899.jpg',
        portableUrl: '/static/IMG_5899.jpg',
        thumbnail: '/asset-v1:edX+test101+2021_T1+type@thumbnail+block@IMG_5899.jpg',
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@IMG_5899.jpg'
      }, {
        displayName: 'ccexample.srt',
        contentType: 'application/octet-stream',
        dateAdded: 'Nov 01, 2021 at 15:42 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@ccexample.srt',
        externalUrl: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@ccexample.srt',
        portableUrl: '/static/ccexample.srt',
        thumbnail: null,
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@ccexample.srt'
      }, {
        displayName: 'Tennis Ball.jpeg',
        contentType: 'image/jpeg',
        dateAdded: 'Aug 04, 2021 at 16:52 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@Tennis_Ball.jpeg',
        externalUrl: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@Tennis_Ball.jpeg',
        portableUrl: '/static/Tennis_Ball.jpeg',
        thumbnail: '/asset-v1:edX+test101+2021_T1+type@thumbnail+block@Tennis_Ball-jpeg.jpg',
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@Tennis_Ball.jpeg'
      }]
    }
  });
};
// eslint-disable-next-line
exports.fetchAssets = fetchAssets;
const fetchCourseDetails = _ref4 => {
  let {
    studioEndpointUrl,
    learningContextId
  } = _ref4;
  return mockPromise({
    data: {
      // license: "creative-commons: ver=4.0 BY NC",
      license: 'all-rights-reserved'
    }
  });
};
// eslint-disable-next-line
exports.fetchCourseDetails = fetchCourseDetails;
const checkTranscripts = _ref5 => {
  let {
    youTubeId,
    studioEndpointUrl,
    blockId,
    videoId
  } = _ref5;
  return mockPromise({
    data: {
      command: 'import'
    }
  });
};
// eslint-disable-next-line
exports.checkTranscripts = checkTranscripts;
const importTranscript = _ref6 => {
  let {
    youTubeId,
    studioEndpointUrl,
    blockId
  } = _ref6;
  return mockPromise({
    data: {
      edx_video_id: 'f36f06b5-92e5-47c7-bb26-bcf986799cb7'
    }
  });
};
// eslint-disable-next-line
exports.importTranscript = importTranscript;
const fetchAdvanceSettings = _ref7 => {
  let {
    studioEndpointUrl,
    learningContextId
  } = _ref7;
  return mockPromise({
    data: {
      allow_unsupported_xblocks: {
        value: true
      }
    }
  });
};
// eslint-disable-next-line
exports.fetchAdvanceSettings = fetchAdvanceSettings;
const fetchVideoFeatures = _ref8 => {
  let {
    studioEndpointUrl
  } = _ref8;
  return mockPromise({
    data: {
      allowThumbnailUpload: true,
      videoSharingEnabledForCourse: true
    }
  });
};
exports.fetchVideoFeatures = fetchVideoFeatures;
const normalizeContent = _ref9 => {
  let {
    blockId,
    blockType,
    content,
    learningContextId,
    title
  } = _ref9;
  let response = {};
  if (blockType === 'html') {
    response = {
      category: blockType,
      couseKey: learningContextId,
      data: content,
      has_changes: true,
      id: blockId,
      metadata: {
        display_name: title
      }
    };
  } else if (blockType === 'problem') {
    response = {
      data: content.olx,
      category: blockType,
      couseKey: learningContextId,
      has_changes: true,
      id: blockId,
      metadata: _objectSpread({
        display_name: title
      }, content.settings)
    };
  } else {
    throw new TypeError(`No Block in V2 Editors named /"${blockType}/", Cannot Save Content.`);
  }
  return _objectSpread({}, response);
};
exports.normalizeContent = normalizeContent;
const saveBlock = _ref10 => {
  let {
    blockId,
    blockType,
    content,
    learningContextId,
    studioEndpointUrl,
    title
  } = _ref10;
  return mockPromise({
    url: urls.block({
      studioEndpointUrl,
      blockId
    }),
    content: normalizeContent({
      blockType,
      content,
      blockId,
      learningContextId,
      title
    })
  });
};
exports.saveBlock = saveBlock;
const uploadAsset = _ref11 => {
  let {
    learningContextId,
    studioEndpointUrl
    // image,
  } = _ref11;
  return mockPromise({
    url: urls.courseAssets({
      studioEndpointUrl,
      learningContextId
    }),
    asset: {
      asset: {
        display_name: 'journey_escape.jpg',
        content_type: 'image/jpeg',
        date_added: 'Jan 05, 2022 at 21:26 UTC',
        url: '/asset-v1:edX+test101+2021_T1+type@asset+block@journey_escape.jpg',
        external_url: 'https://courses.edx.org/asset-v1:edX+test101+2021_T1+type@asset+block@journey_escape.jpg',
        portable_url: '/static/journey_escape.jpg',
        thumbnail: '/asset-v1:edX+test101+2021_T1+type@thumbnail+block@journey_escape.jpg',
        locked: false,
        id: 'asset-v1:edX+test101+2021_T1+type@asset+block@journey_escape.jpg'
      },
      msg: 'Upload completed'
    }
  });
};

// TODO: update to return block data appropriate per block ID, which will equal block type
// eslint-disable-next-line
exports.uploadAsset = uploadAsset;
const fetchStudioView = _ref12 => {
  let {
    blockId,
    studioEndpointUrl
  } = _ref12;
  let data = {};
  if (blockId === 'html-block-id') {
    data = {
      data: '<p>Test prompt content</p>',
      display_name: 'My Text Prompt',
      metadata: {
        display_name: 'Welcome!',
        download_track: true,
        download_video: true,
        edx_video_id: 'f36f06b5-92e5-47c7-bb26-bcf986799cb7',
        html5_sources: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
        show_captions: true,
        sub: '',
        track: '',
        transcripts: {
          en: {
            filename: 'my-transcript-url'
          }
        },
        xml_attributes: {
          source: ''
        },
        youtube_id_1_0: 'dQw4w9WgXcQ'
      }
    };
  } else if (blockId === 'problem-block-id') {
    data = {
      data: `<problem>
      <optionresponse>
          <p>You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown problems. Edit this component to replace this template with your own assessment.</p>
          <label>Add the question text, or prompt, here. This text is required.</label>
          <description>You can add an optional tip or note related to the prompt like this. </description>
          <optioninput>
              <option correct="False">an incorrect answer</option>
              <option correct="True">the correct answer</option>
              <option correct="False">an incorrect answer</option>
          </optioninput>
      </optionresponse>
  </problem>`,
      display_name: 'Dropdown',
      metadata: {
        markdown: `You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown problems. Edit this component to replace this template with your own assessment.
        >>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<
        [[
        an incorrect answer
        (the correct answer)
        an incorrect answer
        ]]`,
        attempts_before_showanswer_button: 7,
        max_attempts: 5,
        rerandomize: 'per_student',
        show_reset_button: true,
        showanswer: 'after_attempts',
        submission_wait_seconds: 15,
        weight: 29
      }
    };
  }
  return mockPromise({
    data: _objectSpread({
      // The following is sent for 'raw' editors.
      html: blockId.includes('mockRaw') ? 'data-editor="raw"' : ''
    }, data)
  });
};
exports.fetchStudioView = fetchStudioView;
const emptyMock = () => mockPromise({});
exports.emptyMock = emptyMock;
//# sourceMappingURL=mockApi.js.map