import { useEffect } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import 'swiper/swiper-bundle.css';

import GlobalStyle from '../globalStyle';
import '../styles/index.css';
import theme from '../theme';

const queryCache = new QueryCache();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
      </ReactQueryCacheProvider>
    </>
  );
}

export default MyApp;
