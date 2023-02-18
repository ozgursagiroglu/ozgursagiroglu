import Container from './Container';
import Email from './Email';

const Footer = () => {
  return (
    <Container>
      <div className="font-inconsolata text-sm text-center py-10 space-y-2 lg:space-y-0">
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
    </Container>
  );
};

export default Footer;
