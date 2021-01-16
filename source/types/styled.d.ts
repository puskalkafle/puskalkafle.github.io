import 'styled-components';

interface ColorProps {
  primary: any;
  white: string;
  text: string;
  heading: string;
  mute: string;
  border: string;
  footerbg: string;
  error: string;
  green: any;
  tagcolor: string;
  confirm: string;
  line: string;
  blueborder: string;
  blue: string;
  heading: string;
}
interface SpacingProps {
  xs: string;
  s: string;
  sm: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
  xxxxxl: string;
}

interface FontSizeProps {
  xs: string;
  s: string;
  sm: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
}

interface RoundnessProps {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}

interface TypographyProps {
  body: string;
  heading: string;
}

interface ShadowProps {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}

interface HeadingProps {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorProps;
    spacing: SpacingProps;
    fontSize: FontSizeProps;
    roundness: Roundness;
    font: Typography;
    shadow: ShadowProps;
    heading: HeadingProps;
  }
}
