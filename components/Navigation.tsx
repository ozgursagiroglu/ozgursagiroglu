'use client';

import React, { useCallback } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const { hash } = e.target as HTMLAnchorElement;

    const target = document.querySelector(hash);

    if (!target) {
      return;
    }

    window.scrollTo({
      top: target.getBoundingClientRect().top - 24,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="absolute top-6 right-6 space-x-4 lg:top-11 lg:right-11 lg:space-x-10">
      {['about-me', 'experience', 'clients', 'contact'].map(item => (
        <Link
          key={item}
          href={`/#${item}`}
          onClick={handleClick}
          className="slash text-sm lg:text-base"
          passHref>
          {item}
        </Link>
      ))}
    </div>
  );
};
export default Navigation;
