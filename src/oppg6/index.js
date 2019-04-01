Object.defineProperty(exports, '__esModule', { value: !0 });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = !0;
  var _d = !1;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = !0
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = !0;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function O() {
  var e = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    v = _useState2[0],
    s = _useState2[1];
  function c() {
    s(
      window['\x61\x73\x64\x66'](
        e['\x63\x75\x72\x72\x65\x6E\x74']['\x76\x61\x6C\x75\x65']
      )
    );
  }
  return _react.default.createElement(
    'div',
    null,
    _react.default.createElement('h1', null, 'Oppgave 6'),
    _react.default.createElement('pre', null, 'Hva er meningen med livet?'),
    _react.default.createElement('hr', { style: { marginBottom: 50 } }),
    _react.default.createElement('input', { type: 'text', ref: e }),
    _react.default.createElement('button', { onClick: c }, 'Svar'),
    _react.default.createElement('div', { style: { height: 50 } }),
    Object.entries(v || {}).map(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        a = _ref2[0],
        b = _ref2[1];
      return _react.default.createElement(
        'div',
        { key: a },
        _react.default.createElement('a', { href: b, target: '_blank' }, a)
      );
    })
  );
}
var _default = O;
exports.default = _default;
