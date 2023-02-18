'use client';

import { createElement } from 'react';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

type Props = {
  as?: string;
  children: React.ReactNode;
  className?: string;
};

const AnimatedElement = ({ as = 'div', className, children }: Props) => {
  const { inView, ref } = useInView({
    rootMargin: '0px',
    threshold: 0.2,
    triggerOnce: true,
  });

  return createElement(
    as,
    {
      ref,
      className: cx(
        className,
        '-translate-y-6 opacity-0  transition-all duration-1000',
        {
          'translate-y-0 opacity-100': inView,
        }
      ),
    },
    children
  );
};

export default AnimatedElement;
