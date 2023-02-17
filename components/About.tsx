import Image from 'next/image';
import { SKILLS } from '@/constants/app';
import Container from './Container';
import Section from './Section';

const About = () => {
  return (
    <Container className="flex justify-between items-start">
      <Section title="about-me" description="A bit information about my ">
        <div className="max-w-2xl space-y-6">
          <p>
            I’ve been working as a full-stack developer for over 10 years based
            Turkey. My main focus is on front-end products, but during my career
            I have developed mobile applications and back-end systems in
            different roles and technologies.
          </p>

          <p>
            While I work, I attach importance to{' '}
            <span className="text-tart-orange">code quality</span>,{' '}
            <span className="text-tart-orange">stabilization</span> and{' '}
            <span className="text-tart-orange">performance</span>.
          </p>

          <p>Here are most of technologies that I used:</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-32">
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
      />
    </Container>
  );
};
export default About;
