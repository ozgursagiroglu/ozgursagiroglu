const Hero = () => {
  return (
    <div className="w-full h-screen bg-[url(/hero-bg.png)] bg-cover flex items-center justify-center">
      <div className="space-y-6 text-center">
        <p className="font-semibold text-2xl text-tart-orange">Hello, I’m</p>
        <h1 className="text-6xl font-bold text-alice-blue">Özgür Sağıroğlu</h1>
        <h2 className="text-2xl text-alice-blue text-opacity-70">
          I’m a full-stack developer and I consult companies for their
          <br /> projects to{' '}
          <span className="font-semibold text-tart-orange">
            develop
          </span> and{' '}
          <span className="font-semibold text-tart-orange">optimization</span>.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
