import React, {useEffect} from 'react';
import FixedSideNav from './components/FixedSideNav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Why from './components/Why';
import Team from './components/Team';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(){
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
    }, {threshold:0.12});
    document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
  },[]);

  return (
    <div>
      <FixedSideNav />
      <Hero />
      <main className="max-w-6xl mx-auto">
        <About />
        <Services />
        <Products />
        <Why />
        <Team />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
export default App;