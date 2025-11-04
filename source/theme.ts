import { DefaultTheme } from 'styled-components';

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
  GreenBorder: '#1AC241',
};
const theme: DefaultTheme = {
  colors: {
    primary: {
      default: palette.primary,
      light: palette.primarylight,
      dark: palette.primarydark,
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
      border: palette.GreenBorder,
    },
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
    xxxxxl: '128px',
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
    xxxxl: '72px',
  },
  roundness: {
    xs: '2px',
    s: '3px',
    m: '6px',
    l: '16px',
    xl: '100%',
  },
  font: {
    body: "'Source Sans Pro', sans-serif",
    heading: '"Playfair Display", Helvetica, "Segeo UI", sans-serif',
    number: '"Poppins", Helvetica, "Segeo UI", sans-serif',
  },
  shadow: {
    xs: '0 0 8px rgba(0 ,0 ,0 , 0.06)',
    s: '0 0 20px rgba(0 ,0 ,0 , 0.06)',
    m: '0 0 26px rgba(0 ,0 ,0 , 0.06)',
    l: '0 0 32px rgba(0 ,0 ,0 , 0.06)',
    xl: '0 0 64px rgba(0 ,0 ,0 , 0.06)',
  },
  heading: {
    h1: '50px',
    h2: '30px',
    h3: '24px',
    h4: '20px',
    h5: '16px',
  },
};


export default theme;
