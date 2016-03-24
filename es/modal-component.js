'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Modal
 */

var ModalShortcut = function (_React$Component) {
  _inherits(ModalShortcut, _React$Component);

  function ModalShortcut(props) {
    _classCallCheck(this, ModalShortcut);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalShortcut).call(this, props));

    _this.state = {
      modalShown: props.show,
      confirmDisabled: props.confirmDisabled
    };
    return _this;
  }

  _createClass(ModalShortcut, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.stateManager) {
        this.props.stateManager(this); //Pass state control to another component, useful, for instance, for enabling / disabling the submit button, or closing the modal programmatically (without passing props)
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show) this.setState({ modalShown: nextProps.show });
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      this.setState({ modalShown: false });

      if (this.props.onHide) this.props.onHide();
    }
  }, {
    key: 'onConfirm',
    value: function onConfirm() {
      this.setState({ modalShown: false });

      if (this.props.onConfirm) this.props.onConfirm();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var children = _props.children;
      var closeText = _props.closeText;
      var hideConfirm = _props.hideConfirm;
      var confirmBSStyle = _props.confirmBSStyle;
      var confirmText = _props.confirmText;
      var _state = this.state;
      var confirmDisabled = _state.confirmDisabled;
      var modalShown = _state.modalShown;


      var that = this; //Give children access to manage modal state
      var childrenWithProps = _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, { modal: that });
      });

      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: modalShown, onHide: this.onHide.bind(this) },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            title
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          childrenWithProps
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.onHide.bind(this) },
            closeText
          ),
          !hideConfirm && _react2.default.createElement(
            _reactBootstrap.Button,
            { ref: 'submit', disabled: confirmDisabled, bsStyle: confirmBSStyle, onClick: this.onConfirm.bind(this) },
            confirmText
          )
        )
      );
    }
  }]);

  return ModalShortcut;
}(_react2.default.Component);

ModalShortcut.propTypes = {
  show: _react2.default.PropTypes.bool, // whether or not the component should be shown on load
  onHide: _react2.default.PropTypes.func, // called when the modal is closed
  title: _react2.default.PropTypes.string, // the title for the modal
  closeText: _react2.default.PropTypes.string, // text for close button
  onConfirm: _react2.default.PropTypes.func, // called when confirm button is clicked
  confirmText: _react2.default.PropTypes.string, // text for confirm button
  confirmBSStyle: _react2.default.PropTypes.string, // Bootstrap style for confirm button
  confirmDisabled: _react2.default.PropTypes.bool, // Should confirm be disabled by default?
  hideConfirm: _react2.default.PropTypes.bool, // Hide confirm button by default
  stateManager: _react2.default.PropTypes.func // This method will be bound to the context
};

ModalShortcut.defaultProps = {
  show: true,
  onHide: function onHide() {
    console.info('Provide onHide for callback on hide.');
  },
  title: 'Modal title',
  closeText: 'Close',
  onConfirm: function onConfirm() {
    console.info('Provide onConfirm for callback on confirm.');
  },
  confirmText: 'Confirm',
  confirmBSStyle: 'primary',
  confirmDisabled: false,
  hideConfirm: false,
  stateManager: function stateManager() {}
};

exports.default = ModalShortcut;