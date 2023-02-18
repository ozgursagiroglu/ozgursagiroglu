'use client';

import { useMemo, useState } from 'react';
import { WORK_HISTORY } from '@/constants/app';
import cx from 'classnames';
import AnimatedElement from './AnimatedElement';
import Container from './Container';
import Section from './Section';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeWork = useMemo(() => WORK_HISTORY[activeTab], [activeTab]);

  return (
    <Container>
      <AnimatedElement>
        <Section title="experience" description="Where I have worked">
          <div className="flex items-start mt-3">
            <div className="flex items-stretch justify-start">
              <div className="w-0.5 bg-alice-blue relative">
                <div
                  className="w-full h-11 bg-tart-orange absolute top-0 left-0 transition-[top]"
                  style={{
                    top: activeTab * 44,
                  }}
                />
              </div>
              <div className="w-40">
                {WORK_HISTORY.map((item, index) => (
                  <button
                    type="button"
                    className={cx(
                      'w-full h-11 pl-4 leading-none text-left text-alice-blue transition-colors',
                      {
                        'text-opacity-70': index !== activeTab,
                        'bg-alice-blue bg-opacity-5': index === activeTab,
                      }
                    )}
                    key={item.company}
                    onClick={() => setActiveTab(index)}>
                    {item.company}
                  </button>
                ))}
              </div>
            </div>
            <div className="ml-9 space-y-6 max-w-3xl">
              <div>
                <div className="leading-none text-alice-blue text-opacity-70 mb-3">
                  <span className="font-semibold text-alice-blue">
                    {activeWork.role}
                  </span>{' '}
                  at{' '}
                  <span className="text-tart-orange font-semibold">
                    {activeWork.company}
                  </span>
                  <span className="text-xs ml-4">
                    {activeWork.start} - {activeWork.end}
                  </span>
                </div>
                <div className="text-alice-blue text-opacity-70 text-sm">
                  {[
                    activeWork.isContract && 'Contract',
                    activeWork.country,
                    activeWork.isRemote ? 'Remote' : 'On-site',
                  ]
                    .filter(item => item)
                    .join(' / ')}
                </div>
              </div>

              <ul className="list-disc pl-5 leading-6">
                {activeWork.descriptions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="space-y-3">
                <div className="font-semibold">Tech Stack</div>
                <div className="font-inconsolata text-sm">
                  {activeWork.stacks}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </AnimatedElement>
    </Container>
  );
};

export default Experience;
