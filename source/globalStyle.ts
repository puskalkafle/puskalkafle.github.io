import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    font-family: ${({theme}) => theme.font.body};
    background: ${({theme}) => theme.colors.primary.light};
    color: ${({theme}) => theme.colors.primary.dark};
    min-height:500px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({theme}) => theme.font.heading};
    margin:0;
    margin-bottom: ${({theme}) => theme.spacing.s};
    font-weight: 700;
    line-height: 1.2;
    color: ${({theme}) => theme.colors.heading};
  }
  h1{
    font-size: ${({theme}) => theme.heading.h1};
  }
  h2{
    font-size: ${({theme}) => theme.heading.h2};
  }
  h3{
    font-size: ${({theme}) => theme.heading.h2};
  }
  h4{
    font-size: ${({theme}) => theme.heading.h4};
  }
  h5{
    font-size: ${({theme}) => theme.heading.h5};
  }
  p{
    margin: 0;
    margin-bottom: ${({theme}) => theme.spacing.s};
    line-height: 1.6;
    &.small{
      font-size: ${({theme}) => theme.fontSize.sm};
    }
  }
  .body-2{
    font-size: ${({theme}) => theme.fontSize.sm};
  }
  .body-3{
    font-size: ${({theme}) => theme.fontSize.s};
  }
  .number {
    font-family: ${({theme}) => theme.font.number};
  }  
  
  .equal {
    display: flex;
    flex-wrap: wrap;
    &> div {
     display: flex;
    }
  }

`;


export default GlobalStyle;
