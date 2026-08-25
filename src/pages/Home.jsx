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
      <div>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </PageTransition>
  );
};

export default Home;
