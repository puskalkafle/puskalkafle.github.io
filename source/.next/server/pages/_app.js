module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./globalStyle.ts

const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  /* Normalize */
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  p{
    line-height: 1.3
  }
  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
    
  }

  a {
    background-color: transparent;
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
    
  }

  b,strong {
    font-weight: bolder;
  }

  code,kbd,samp {
    font-family: monospace, monospace;
    font-size: 1em;
    
  }

  small {
    font-size: 80%;
  }

  sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,input,optgroup,select,textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    
  }

  button,input {
    overflow: visible;
  }

  button,select {
    text-transform: none;
  }

  button,[type="button"],[type="reset"],[type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
    
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
  body,html {
    height:100%;
  }
  body {
    font-family: ${({
  theme
}) => theme.font.body};
    background: ${({
  theme
}) => theme.colors.primary.light};
    color: ${({
  theme
}) => theme.colors.primary.dark};
    min-height:500px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({
  theme
}) => theme.font.heading};
    margin:0;
    margin-bottom: ${({
  theme
}) => theme.spacing.s};
    font-weight: 700;
    line-height: 1.2;
    color: ${({
  theme
}) => theme.colors.heading};
  }
  h1{
    font-size: ${({
  theme
}) => theme.heading.h1};
  }
  h2{
    font-size: ${({
  theme
}) => theme.heading.h2};
  }
  h3{
    font-size: ${({
  theme
}) => theme.heading.h2};
  }
  h4{
    font-size: ${({
  theme
}) => theme.heading.h4};
  }
  h5{
    font-size: ${({
  theme
}) => theme.heading.h5};
  }
  p{
    margin: 0;
    margin-bottom: ${({
  theme
}) => theme.spacing.s};
    line-height: 1.6;
    &.small{
      font-size: ${({
  theme
}) => theme.fontSize.sm};
    }
  }
  .body-2{
    font-size: ${({
  theme
}) => theme.fontSize.sm};
  }
  .body-3{
    font-size: ${({
  theme
}) => theme.fontSize.s};
  }
  .number {
    font-family: ${({
  theme
}) => theme.font.number};
  }  
  
  .equal {
    display: flex;
    flex-wrap: wrap;
    &> div {
     display: flex;
    }
  }

`;
/* harmony default export */ var globalStyle = (GlobalStyle);
// CONCATENATED MODULE: ./theme.ts
const palette = {
  primary: '#2d8ecd',
  primarylight: '#faf9f5',
  primarydark: '#04111a',
  confirm: '#0ACA37',
  text: '#757575',
  mute: '#A3A3A3',
  heading: '#404040',
  white: '#ffffff',
  footerBg: '#FBFBFB',
  border: '#EAEAEA',
  line: '#707070',
  tagColor: '#465ef68c',
  error: '#FA5555',
  Blue: '#344ef3a6',
  BlueBorder: '#5265DC',
  Green: '#0aca37',
  GreenLight: '#0aca37a6',
  GreenBorder: '#1AC241'
};
const theme = {
  colors: {
    primary: {
      default: palette.primary,
      light: palette.primarylight,
      dark: palette.primarydark
    },
    text: palette.text,
    mute: palette.mute,
    confirm: palette.confirm,
    white: palette.white,
    border: palette.border,
    line: palette.line,
    error: palette.error,
    heading: palette.heading,
    footerbg: palette.footerBg,
    tagcolor: palette.tagColor,
    blue: palette.Blue,
    blueborder: palette.BlueBorder,
    green: {
      default: palette.Green,
      light: palette.GreenLight,
      border: palette.GreenBorder
    }
  },
  spacing: {
    xs: '4px',
    s: '8px',
    sm: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    xxxxl: '100px',
    xxxxxl: '128px'
  },
  fontSize: {
    xs: '10px',
    s: '12px',
    sm: '14px',
    m: '16px',
    l: '18px',
    xl: '24px',
    xxl: '32px',
    xxxl: '48px',
    xxxxl: '72px'
  },
  roundness: {
    xs: '2px',
    s: '3px',
    m: '6px',
    l: '16px',
    xl: '100%'
  },
  font: {
    body: "'Source Sans Pro', sans-serif",
    heading: '"Playfair Display", Helvetica, "Segeo UI", sans-serif',
    number: '"Poppins", Helvetica, "Segeo UI", sans-serif'
  },
  shadow: {
    xs: '0 0 8px rgba(0 ,0 ,0 , 0.06)',
    s: '0 0 20px rgba(0 ,0 ,0 , 0.06)',
    m: '0 0 26px rgba(0 ,0 ,0 , 0.06)',
    l: '0 0 32px rgba(0 ,0 ,0 , 0.06)',
    xl: '0 0 64px rgba(0 ,0 ,0 , 0.06)'
  },
  heading: {
    h1: '50px',
    h2: '30px',
    h3: '24px',
    h4: '20px',
    h5: '16px'
  }
};
/* harmony default export */ var theme_0 = (theme);
// CONCATENATED MODULE: ./pages/_app.tsx

var __jsx = external_react_default.a.createElement;





function MyApp({
  Component,
  pageProps
}) {
  Object(external_react_["useEffect"])(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  return __jsx(external_react_default.a.Fragment, null, __jsx(external_styled_components_["ThemeProvider"], {
    theme: theme_0
  }, __jsx(globalStyle, null), __jsx(Component, pageProps)));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ })

/******/ });