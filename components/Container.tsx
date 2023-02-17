import cx from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={cx('max-w-7xl m-auto', className)}>{children}</div>;
};

export default Container;
