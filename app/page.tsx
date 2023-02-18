import About from '@/components/About';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

const Page = () => {
  return (
    <>
      <Navigation />

      <main className="space-y-20 lg:space-y-52">
        <Hero />
        <About />
        <Experience />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Page;
