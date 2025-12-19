import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Özgür Sağıroğlu',
  url: 'https://ozgursagiroglu.com',
  jobTitle: 'Software Engineer & Founder',
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Diojen Tech',
      url: 'https://diojen.tech',
    },
    {
      '@type': 'Organization',
      name: 'Asistan',
      url: 'https://asistan.ae',
    },
  ],
  sameAs: [
    'https://linkedin.com/in/ozgursagiroglu',
    'https://github.com/ozgursagiroglu',
  ],
  knowsAbout: [
    'Software Engineering',
    'Full-Stack Development',
    'React',
    'Next.js',
    'Node.js',
    'React Native',
    'SaaS',
    'Fintech',
    'E-commerce',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'UAE',
  },
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl">
          <article className="space-y-6 text-lg leading-relaxed">
            <p>
              I&apos;m{' '}
              <span className="text-diojen-orange font-semibold">Özgür</span> —
              a software engineer and founder based in Dubai.
            </p>

            <p>
              Over the past 12 years, I&apos;ve shipped products for companies
              like Turkish Airlines, Boyner, and Bilyoner, working across SaaS,
              fintech, and e-commerce.
            </p>

            <p>
              At Boatsy, I served as CTO — leading a distributed team of 8
              engineers across 4 countries to launch a 10k+ listing marketplace
              in 4 months.
            </p>

            <p>Today I run:</p>

            <ul className="space-y-2 pl-1">
              <li>
                <a
                  href="https://diojen.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="text-diojen-orange hover:underline font-semibold">
                  Diojen Tech
                </a>
                <span className="text-diojen-muted">
                  {' '}
                  — B2B software consulting.
                </span>
              </li>
              <li>
                <a
                  href="https://asistan.ae"
                  target="_blank"
                  rel="noreferrer"
                  className="text-diojen-orange hover:underline font-semibold">
                  Asistan
                </a>
                <span className="text-diojen-muted">
                  {' '}
                  — a SaaS platform for UAE travel & visa agencies.
                </span>
              </li>
            </ul>
          </article>

          <footer className="mt-12 pt-8 border-t border-diojen-muted/30">
            <div className="flex items-center gap-6">
              <a
                href="mailto:info@ozgursagiroglu.com"
                className="text-diojen-muted hover:text-diojen-orange transition-colors"
                aria-label="Email">
                <IconMail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ozgursagiroglu"
                target="_blank"
                rel="noreferrer"
                className="text-diojen-muted hover:text-diojen-orange transition-colors"
                aria-label="LinkedIn">
                <IconBrandLinkedin size={24} />
              </a>
              <a
                href="https://github.com/ozgursagiroglu"
                target="_blank"
                rel="noreferrer"
                className="text-diojen-muted hover:text-diojen-orange transition-colors"
                aria-label="GitHub">
                <IconBrandGithub size={24} />
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Page;
