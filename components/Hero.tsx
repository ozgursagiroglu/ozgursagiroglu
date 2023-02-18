import AnimatedElement from './AnimatedElement';
import Container from './Container';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[url(/hero-bg.png)] bg-cover flex items-center justify-center">
      <Container className="space-y-6 text-center">
        <AnimatedElement
          as="p"
          className="font-semibold lg:text-2xl text-tart-orange">
          Hello, I’m
        </AnimatedElement>
        <AnimatedElement
          as="h1"
          className="text-3xl lg:text-6xl font-bold text-alice-blue delay-200">
          Özgür Sağıroğlu
        </AnimatedElement>
        <AnimatedElement
          as="h2"
          className="lg:text-2xl text-alice-blue text-opacity-70 delay-300">
          I’m a full-stack developer and I help companies with their
          <br className="hidden lg:block" /> projects to{' '}
          <span className="font-semibold text-tart-orange">develop</span> and{' '}
          <span className="font-semibold text-tart-orange">optimize</span>.
        </AnimatedElement>
      </Container>
    </div>
  );
};

export default Hero;
