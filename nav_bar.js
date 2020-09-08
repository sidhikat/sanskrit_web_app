'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "header",
        { "class": "masthead mb-auto" },
        React.createElement(
          "div",
          { "class": "inner" },
          React.createElement(
            "h3",
            { "class": "masthead-brand" },
            "SwatSanskrit"
          ),
          React.createElement(
            "nav",
            { "class": "nav nav-masthead justify-content-center" },
            React.createElement(
              "a",
              { "class": "nav-link active", href: "./index.html" },
              "Home"
            ),
            React.createElement(
              "a",
              { "class": "nav-link dropdown-toggle", href: "#", role: "button", "data-toggle": "dropdown" },
              "Vocabulary"
            ),
            React.createElement(
              "div",
              { "class": "dropdown-menu", "aria-labelledby": "navbarDropdown" },
              React.createElement(
                "a",
                { "class": "dropdown-item", href: "#" },
                "Action"
              ),
              React.createElement(
                "a",
                { "class": "dropdown-item", href: "#" },
                "Another action"
              ),
              React.createElement("div", { "class": "dropdown-divider" }),
              React.createElement(
                "a",
                { "class": "dropdown-item", href: "#" },
                "Something else here"
              )
            ),
            React.createElement(
              "a",
              { "class": "nav-link", href: "#" },
              "Sanskrit Keyboard"
            ),
            React.createElement(
              "a",
              { "class": "nav-link", href: "./scripts.html" },
              "Game"
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(React.Component);

var domContainer = document.querySelector('#nav_bar_component');
ReactDOM.render(React.createElement(NavBar, null), domContainer);