'use client';

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandStackoverflow,
} from '@tabler/icons-react';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';
import AnimatedElement from './AnimatedElement';
import Email from './Email';

const Contact = () => {
  const { inView, ref } = useInView({
    threshold: 1,
    rootMargin: '0px',
  });

  return (
    <div id="contact" className="space-y-8 text-center" ref={ref}>
      <div className="w-full">
        <span
          className={cx('inline-block text-4xl', {
            'animate-sayHello': inView,
          })}>
          👋
        </span>
      </div>

      <AnimatedElement className="text-2xl lg:text-4xl font-semibold leading-normal">
        Hit me up if you think we can <br /> work{' '}
        <span className="font-bold text-tart-orange">together</span>
      </AnimatedElement>
      <AnimatedElement className="flex items-center justify-center gap-6 delay-200">
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
      </AnimatedElement>

      <AnimatedElement className="flex justify-center delay-400">
        <Email
          name="info"
          domain="ozgursagiroglu"
          tld="com"
          className="bg-tart-orange border-none shadow-md py-3 px-6 font-semibold">
          Get in touch
        </Email>
      </AnimatedElement>
    </div>
  );
};
export default Contact;
