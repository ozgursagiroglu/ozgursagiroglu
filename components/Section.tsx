type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Section = ({ title, description, children }: Props) => {
  return (
    <div id={title}>
      <div className="flex items-end space-x-6 mb-6">
        <h3 className="font-bold text-3xl leading-none font-inconsolata text-tart-orange">
          / {title}
        </h3>
        <p className="text-alice-blue italic text-opacity-70">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Section;
