"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const _excluded = ["sizeType"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function tinyMCEEmbedIframePlugin(editor) {
  function openInsertIframeModal() {
    const defaultConfig = {
      title: 'Insert iframe',
      body: {
        type: 'tabpanel',
        tabs: [{
          title: 'General',
          items: [{
            type: 'input',
            name: 'source',
            label: 'Source URL',
            multiline: false,
            autofocus: true,
            required: true
          }, {
            type: 'selectbox',
            name: 'sizeType',
            label: 'Size',
            items: [{
              text: 'Inline Value',
              value: 'inline'
            }, {
              text: 'Big embed',
              value: 'big'
            }, {
              text: 'Small embed',
              value: 'small'
            }]
          }, {
            type: 'sizeinput',
            name: 'size',
            label: 'Dimensions'
          }]
        }, {
          title: 'Advanced',
          items: [{
            type: 'input',
            name: 'name',
            label: 'Name',
            value: ''
          }, {
            type: 'input',
            name: 'title',
            label: 'Title',
            value: ''
          }, {
            type: 'input',
            name: 'longDescriptionURL',
            label: 'Long description URL',
            value: ''
          }, {
            type: 'checkbox',
            name: 'border',
            label: 'Show iframe border',
            text: 'Border',
            checked: false
          }, {
            type: 'checkbox',
            name: 'scrollbar',
            label: 'Enable scrollbar',
            text: 'Scrollbar',
            checked: false
          }]
        }]
      },
      buttons: [{
        type: 'cancel',
        name: 'cancel',
        text: 'Cancel'
      }, {
        type: 'submit',
        name: 'save',
        text: 'Save',
        primary: true
      }],
      onChange(api, field) {
        const {
          name
        } = field;
        const data = api.getData();
        const {
            sizeType
          } = data,
          fields = _objectWithoutProperties(data, _excluded);
        const isSizeTypeFiled = name === 'sizeType';
        const hasCustomSize = sizeType === 'inline';
        if (!hasCustomSize && isSizeTypeFiled) {
          const {
            body: {
              tabs: [generalTab]
            }
          } = defaultConfig;
          generalTab.items = generalTab.items.filter(item => item.type !== 'sizeinput');
          defaultConfig.initialData = _objectSpread(_objectSpread({}, fields), {}, {
            sizeType
          });
          api.redial(defaultConfig);
        }
        if (hasCustomSize && isSizeTypeFiled) {
          const {
            body: {
              tabs: [generalTab]
            }
          } = defaultConfig;
          const hasSizeInput = generalTab.items.some(item => item.name === 'size');
          if (!hasSizeInput) {
            generalTab.items = [...generalTab.items, {
              type: 'sizeinput',
              name: 'size',
              label: 'Dimensions'
            }];
          }
          defaultConfig.initialData = _objectSpread(_objectSpread({}, fields), {}, {
            sizeType
          });
          api.redial(defaultConfig);
        }
      },
      onSubmit(api) {
        const data = api.getData();
        const sizeTypes = {
          small: {
            height: '100px',
            width: '100px'
          },
          big: {
            height: '800px',
            width: '800px'
          }
        };
        if (data.source) {
          const {
            size,
            sizeType,
            name,
            title,
            longDescriptionURL,
            border,
            scrollbar
          } = data;
          const {
            width,
            height
          } = sizeTypes[sizeType] || {
            width: size.width,
            height: size.height
          };
          const pxRegex = /^\d+px$/;
          const widthFormat = pxRegex.test(width) ? width : '300px';
          const heightFormat = pxRegex.test(height) ? height : '300px';
          const hasScroll = scrollbar ? 'yes' : 'no';
          let iframeCode = `<iframe src="${data.source}" width="${widthFormat}" height="${heightFormat}" scrolling="${hasScroll}"`;
          if (name) {
            iframeCode += ` name="${name}"`;
          }
          if (title) {
            iframeCode += ` title="${title}"`;
          }
          if (longDescriptionURL) {
            iframeCode += ` longdesc="${longDescriptionURL}"`;
          }
          if (!border) {
            iframeCode += 'frameborder="0"';
          }
          iframeCode += '></iframe>';
          iframeCode = `<div class="tiny-pageembed" style="width: ${widthFormat}; height: ${heightFormat}">` + `${iframeCode}` + '</div>';
          editor.insertContent(iframeCode);
        }
        api.close();
      }
    };
    editor.windowManager.open(defaultConfig);
  }

  // Register the button
  editor.ui.registry.addButton('embediframe', {
    text: 'Embed iframe',
    onAction: openInsertIframeModal
  });
}
(tinymce => {
  if (tinymce) {
    tinymce.PluginManager.add('embediframe', tinyMCEEmbedIframePlugin);
  }
})(window.tinymce);
var _default = exports.default = tinyMCEEmbedIframePlugin;
//# sourceMappingURL=embedIframePlugin.js.map