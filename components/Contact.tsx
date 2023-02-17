import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandStackoverflow,
} from '@tabler/icons-react';
import Email from './Email';

const Contact = () => {
  return (
    <div id="contact" className="space-y-8 text-center">
      <div className="text-4xl">👋</div>
      <div className="text-4xl font-semibold leading-normal">
        Hit me up if you think we can <br /> work{' '}
        <span className="font-bold text-tart-orange">together</span>
      </div>
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://instagram.com/ozgursagiroglu"
          target="_blank"
          rel="noreferrer">
          <IconBrandInstagram size={24} stroke={1} />
        </a>
        <a
          href="https://github.com/ozgursagiroglu"
          target="_blank"
          rel="noreferrer">
          <IconBrandGithub size={24} stroke={1} />
        </a>
        <a
          href="https://linkedin.com/in/ozgursagiroglu"
          target="_blank"
          rel="noreferrer">
          <IconBrandLinkedin size={24} stroke={1} />
        </a>
        <a
          href="https://stackoverflow.com/users/21200146"
          target="_blank"
          rel="noreferrer">
          <IconBrandStackoverflow size={24} stroke={1} />
        </a>
      </div>

      <div className="flex justify-center">
        <Email
          name="info"
          domain="ozgursagiroglu"
          tld="com"
          className="bg-tart-orange border-none shadow-md py-3 px-6 font-semibold">
          Get in touch
        </Email>
      </div>
    </div>
  );
};
export default Contact;
