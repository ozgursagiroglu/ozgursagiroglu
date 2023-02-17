'use client';

import { useCallback } from 'react';
import cx from 'classnames';

type Props = {
  name: string;
  domain: string;
  tld: string;
  className?: string;
  children?: React.ReactNode;
};

const Email = ({ name, domain, tld, children, className = '' }: Props) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      window.location.href = `mailto:${name}@${domain}.${tld}`;
    },
    [name, domain, tld]
  );

  return (
    <a
      href="#"
      className={cx(className, {
        'crypted-mail': !children,
      })}
      data-name={name}
      data-domain={domain}
      data-tld={tld}
      onClick={handleClick}>
      {children}
    </a>
  );
};

export default Email;
