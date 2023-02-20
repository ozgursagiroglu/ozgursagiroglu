import Image from 'next/image';
import { CLIENTS } from '@/constants/app';
import cx from 'classnames';
import Container from './Container';
import Section from './Section';

const Clients = () => {
  return (
    <Container>
      <Section
        title="clients"
        description="Here are the companies that I worked for their projects">
        <div className="flex items-center flex-wrap">
          {Object.keys(CLIENTS).map(item => (
            <div
              key={item}
              className="border border-alice-blue border-opacity-30 w-40 h-40 lg:w-48 lg:h-48">
              <Image
                src={`/clients/${item}.png`}
                alt={item}
                width={200}
                height={200}
                className={cx(
                  'opacity-70 hover:opacity-100 transition-opacity',
                  {
                    grayscale: CLIENTS[item].isGrayscale,
                  }
                )}
              />
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
};
export default Clients;
