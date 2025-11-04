import Head from 'next/head';
import React from 'react';

interface Props {}

const Main: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Head>
        <title>Puskal - UX Engineer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <iframe
        src="https://puskal.framer.website/"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          border: '0',
        }}
        title="Puskal - Framer"
        allow="fullscreen"
      />
    </>
  );
};

export default Main;
