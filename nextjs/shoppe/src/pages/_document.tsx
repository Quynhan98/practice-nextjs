import { Html, Head, Main, NextScript } from 'next/document'
import { Partytown } from '@builder.io/partytown/react'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Partytown debug forward={['dataLayer.push']} />
        <Script
          strategy="worker"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID}`}
        />
        <Script
          id="google-tag-manager"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_TRACKING_ID}', {
                page_path: window.location.pathname,
            });
        `,
          }}
        />
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
