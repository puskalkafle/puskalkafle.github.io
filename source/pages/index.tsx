import Head from 'next/head';
import React from 'react';
import Landing from './landing';

interface Props {}

const Main: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Head>
        <title>Puskal - Desinger and Developer</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Search Engine --> */}
<meta name="description" content="Frontend developer and designer from Kathmandu, Nepal"/>
{/* <!-- Twitter --> */}
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Puskal Kafle - Web Designer and Developer"/>
<meta name="twitter:description" content="Frontend developer and designer from Kathmandu, Nepal"/>
<meta name="twitter:site" content="@puskal"/>
<meta name="twitter:creator" content="@puskal"/>
{/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
<meta name="og:title" content="Puskal Kafle - Web Designer and Developer"/>
<meta name="og:description" content="Frontend developer and designer from Kathmandu, Nepal"/>
<meta name="og:url" content="https://puskalkafle.github.io"/>
<meta name="og:site_name" content="Puskal Kafle Website"/>
<meta name="og:type" content="website"/>
<meta name="Keywords" content="Nepal, Kathmandu, Frontend Developer, Frontend Developer Nepal, Frontend Developer Kathmandu, Designer, UI, UX, Graphic design, Graphic designer, logo, web design, wireframe"></meta>
      </Head>
      <Landing />
    </>
  );
};

export default Main;
