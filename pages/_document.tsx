/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import { URLS } from "config";
import { Html, Head, Main, NextScript } from "next/document";

import { FaviconHead } from "components/commons/head/faviconHead";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Favicon */}
        <FaviconHead />

        {/*OpenGraph metadata*/}
        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Paisanos Challenge' />
        <meta property='og:description' content='' />
        <meta property='og:url' content={`${URLS?.SITE_URL}`} />
        <meta property='og:site_name' content='' />
        <meta
          property='og:image'
          rel='stylesheet preload prefetch'
          content={`${URLS?.SITE_URL}/images/seo/og_image.webp`}
        />

        {/* HTML Meta Tags */}
        <meta name='description' content='' />

        {/*  Google / Search Engine Tags */}
        <meta itemProp='name' content='' />
        <meta itemProp='description' content='' />
        <meta
          itemProp='image'
          rel='stylesheet preload prefetch'
          content={`${URLS?.SITE_URL}/images/seo/og_image   
          .webp`}
        />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content={`${URLS?.SITE_URL}`} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='' />
        <meta property='og:description' content='' />
        <meta
          property='og:image'
          rel='stylesheet preload prefetch'
          content={`${URLS?.SITE_URL}/images/seo/og_image.webp`}
        />

        {/* Twitter Meta Tags  */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='' />
        <meta name='twitter:description' content='' />
        <meta
          name='twitter:image'
          rel='stylesheet preload prefetch'
          content={`${URLS?.SITE_URL}/images/seo/og_image.webp`}
        />

        {/* Google font */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Rubik:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
