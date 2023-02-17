import Script from 'next/script';
import Email from './Email';

const Footer = () => {
  return (
    <>
      <div className="font-inconsolata text-sm text-center py-10">
        <p>This site has been designed by myself but I’m not a designer :(</p>
        <p>
          That’s why, when designing this site, I was inspired by{' '}
          <a
            href="https://brittanychiang.com/"
            target="_blank"
            rel="noreferrer"
            className="text-tart-orange">
            Brittany Chiang’s
          </a>{' '}
          site.
        </p>
        <p>
          Özgür Sağıroğlu /{' '}
          <Email name="info" domain="ozgursagiroglu" tld="com" />
        </p>
      </div>

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
};

export default Footer;
