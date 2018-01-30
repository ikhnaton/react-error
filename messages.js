'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('./actions');

var messageActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_React$Component) {
	_inherits(Messages, _React$Component);

	function Messages(props) {
		_classCallCheck(this, Messages);

		var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this, props));

		_this.closeModal = _this.closeModal.bind(_this);

		var reactErrorStyle = ".message-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;background-color:grey;z-index:4000;opacity:.5}.message-container{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:auto;width:45%;border:none;border-radius:32px;background-color:#edf1ea;padding:20px;opacity:1;z-index:4001}.message-container button{position:absolute;right:15px;top:15px;border-radius:none;border:none;background-color:inherit;font-size:16px}.message-container div{max-width:calc(100% - 25px)}.message-title-default{margin-bottom:4px;font-weight:900}.message-text-default{white-space:pre}.message-title{color:#000}.message-text{color:red}";

		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = reactErrorStyle;
		document.getElementsByTagName('head')[0].appendChild(style);
		return _this;
	}

	_createClass(Messages, [{
		key: 'closeModal',
		value: function closeModal() {
			this.props.dispatch(messageActions.clearMessage());
		}
	}, {
		key: 'render',
		value: function render() {
			return this.props.messages.isVisible === false ? null : _react2.default.createElement(
				'div',
				{ className: 'react-error' },
				_react2.default.createElement('div', { className: 'message-backdrop' }),
				_react2.default.createElement(
					'div',
					{ className: 'message-container' },
					_react2.default.createElement(
						'button',
						{ onClick: this.closeModal },
						'X'
					),
					_react2.default.createElement(
						'div',
						{ className: 'message-title-default' + (' ' + this.props.messages.titleClassName) },
						this.props.messages.titleText
					),
					_react2.default.createElement(
						'div',
						{ className: 'message-text-default' + (' ' + this.props.messages.className) },
						this.props.messages.text
					)
				)
			);
		}
	}]);

	return Messages;
}(_react2.default.Component);

exports.default = Messages;
