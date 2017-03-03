'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clipperJs = require('clipper-js');

var _clipperJs2 = _interopRequireDefault(_clipperJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var union = function union() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      SUBJECT_PATHS = _ref.SUBJECT_PATHS,
      CLIP_SHAPE_PATHS = _ref.CLIP_SHAPE_PATHS;

  var subject = new _clipperJs2.default(SUBJECT_PATHS, true);
  var clip = new _clipperJs2.default(CLIP_SHAPE_PATHS, true);
  var result = subject.union(clip);
  return { PATHS: result.paths, CLOSED: result.closed };
};

exports.default = union;