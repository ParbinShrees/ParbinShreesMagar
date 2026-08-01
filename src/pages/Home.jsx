import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </PageTransition>
  );
};

export default Home;
