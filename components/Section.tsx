type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Section = ({ title, description, children }: Props) => {
  return (
    <div id={title}>
      <div className="lg:flex items-end space-y-2 lg:space-y-0 lg:space-x-6 mb-6">
        <h3 className="font-bold text-2xl leading-none lg:text-3xl lg:leading-none font-inconsolata text-tart-orange">
          / {title}
        </h3>
        <p className="text-sm lg:text-base text-alice-blue italic text-opacity-70">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};

export default Section;
