import Head from 'next/head';
import React from 'react';
import Landing from './landing';

interface Props {}

const Main: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Head>
        <title>Puskal - Designer and Developer</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Search Engine --> */}
<meta name="google-site-verification" content="g5XrM5CffAuoNakjzOepDxTQshDzTQvaHzQVh4nw5dw" />
<meta name="title" content="Puskal Kafle - UX/UI Designer and Frontend Developer"/>
<meta name="description" content="Puskal Kafle is Napel based frontend developer and UI/UX designer. Visit this website to see his work."/>
<meta name="keywords" content="UI mockups, prototypes, wireframes, style guides, standards, graphic elements, design suggestions, reusable code, collaborate, usability, bug-free, communication skills, detail-oriented, JavaScript, HTML5, CSS3, RESTful APIs, GUI, Color Theory, Typography, Adobe XD, Adobe Photoshop, Adobe Illustrator, Puskal Kafle, Kathmandu, Nepal, designer, developer, graphic designer, software developer, web developer, web application, freelancer, javascript, d3js, data visualization, jquery, angular, git, best desiger, top designer, emerging technologies, json, npm, digital painting, vector art, branding, style guideline"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta name="author" content="Puskal Kafle"/>
{/* <!-- Twitter --> */}
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Puskal Kafle - Web Designer and Developer"/>
<meta name="twitter:description" content="Frontend developer and designer from Kathmandu, Nepal"/>
<meta name="twitter:site" content="@puskal"/>
<meta name="twitter:creator" content="@puskal"/>
{/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
<meta name="og:title" content="Puskal Kafle - Web Designer and Developer"/>
<meta name="og:description" content="Frontend developer and designer from Kathmandu, Nepal"/>
<meta name="og:url" content="https://www.puskalkafle.com.np/"/>
<meta name="og:site_name" content="Puskal Kafle Website"/>
<meta name="og:type" content="website"/>
{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-64763340-5"></script>
<script>
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-64763340-5');
  `}
</script>

      </Head>
      <Landing />
    </>
  );
};

export default Main;
