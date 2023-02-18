import Image from 'next/image';
import { SKILLS } from '@/constants/app';
import AnimatedElement from './AnimatedElement';
import Container from './Container';
import Section from './Section';

const About = () => {
  return (
    <Container>
      <AnimatedElement className="flex justify-between items-start">
        <Section title="about-me" description="A bit of information about me">
          <div className="max-w-2xl space-y-6">
            <Image
              src="/picture.png"
              alt="Özgür Sağıroğlu"
              width={289}
              height={250}
              className="block lg:hidden"
            />

            <p>
              I’ve been working as a full-stack developer for over 10 years
              based in Turkey. I met coding to develop my projects when I was in
              high school. I improved my skills in every project. My main focus
              is on front-end products, but I’ve built mobile applications and
              back-end systems in different roles and technologies during my
              career. Since 2019, I’ve been working in contract roles with
              companies for their projects to develop and optimize.
            </p>

            <p>
              I attach importance to{' '}
              <span className="text-tart-orange">performance</span>,{' '}
              <span className="text-tart-orange">stabilization</span>, and{' '}
              <span className="text-tart-orange">code quality</span> on projects
              while I work.
            </p>

            <p>Here are most of the technologies that I used:</p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6 lg:gap-x-32 max-w-md">
              {SKILLS.map(item => (
                <div
                  className="font-inconsolata text-alice-blue slash"
                  key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Image
          src="/picture.png"
          alt="Özgür Sağıroğlu"
          width={289}
          height={250}
          className="hidden lg:block"
        />
      </AnimatedElement>
    </Container>
  );
};
export default About;
