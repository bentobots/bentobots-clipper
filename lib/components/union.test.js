'use strict';

var _union = require('./union');

var _union2 = _interopRequireDefault(_union);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subjectPaths = [[{ X: 30, Y: 30 }, { X: 10, Y: 30 }, { X: 10, Y: 10 }, { X: 30, Y: 10 }]];
var clipPaths = [[{ X: 20, Y: 20 }, { X: 0, Y: 20 }, { X: 0, Y: 0 }, { X: 20, Y: 0 }]];

it('can join shapes', function () {
  var result = (0, _union2.default)({ SUBJECT_PATHS: subjectPaths, CLIP_PATHS: clipPaths });
  var expected = {
    CLOSED: true,
    PATHS: [[{ X: 30, Y: 30 }, { X: 10, Y: 30 }, { X: 10, Y: 10 }, { X: 30, Y: 10 }]]
  };
  expect(result).toEqual(expected);
});