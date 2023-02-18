import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Hi, I&apos;m Özgür</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="I'm a full-stack developer and I consult companies for their projects to develop and optimization."
      />
      <link rel="icon" href="/favicon.ico" />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TGJXHV6TB8"
      />
      <Script id="analytics">
        {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
   
     gtag('config', 'G-TGJXHV6TB8');
    `}
      </Script>
    </>
  );
}
