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
        <div className="flex items-center flex-wrap gap-2">
          {Object.keys(CLIENTS).map(item => (
            <div
              key={item}
              className="border border-alice-blue border-opacity-30 w-48 h-48">
              <Image
                src={`/clients/${item}.png`}
                alt={item}
                width={200}
                height={200}
                className={cx(
                  CLIENTS[item as keyof typeof CLIENTS]?.className ?? '',
                  'opacity-70 hover:opacity-100 transition-opacity'
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
