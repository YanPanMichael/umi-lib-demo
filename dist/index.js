'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var classnames = _interopDefault(require('classnames'));

function getTest () {
  return 'test';
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".button-module_large__1XL66 {\n  font-size: 17px;\n}\n.button-module_bold__3YmfY {\n  font-weight: bold;\n}\n";
var styles = {"large":"button-module_large__1XL66","bold":"button-module_bold__3YmfY"};
styleInject(css);

function ButtonCom (props) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      color: props.color
    },
    className: classnames(styles.large, styles.bold)
  }, props.children);
}

function index() {
  var test = getTest();
  console.log("".concat(test));
  var btn = ButtonCom();
  console.log(btn);
}
// 以下是babel的打包方式
//npx umi-lib build --cjs babel --esm babel
// --umd 将所有的依赖打包成一个文件，然后使用<script type="modules" src="" />引入
// npx umi-lib build --umd test

module.exports = index;
