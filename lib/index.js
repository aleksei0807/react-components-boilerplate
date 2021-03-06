'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomComponent = function (_Component) {
	(0, _inherits3.default)(CustomComponent, _Component);

	function CustomComponent() {
		(0, _classCallCheck3.default)(this, CustomComponent);
		return (0, _possibleConstructorReturn3.default)(this, (CustomComponent.__proto__ || Object.getPrototypeOf(CustomComponent)).apply(this, arguments));
	}

	(0, _createClass3.default)(CustomComponent, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.props.className || 'custom-component' },
				'Custom Component'
			);
		}
	}]);
	return CustomComponent;
}(_react.Component);

exports.default = CustomComponent;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(CustomComponent, 'CustomComponent', 'src/index.jsx');
}();

;