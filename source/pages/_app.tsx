import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import '../styles/index.css';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
    </>
  );
}

export default MyApp;
