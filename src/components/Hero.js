import React, {useEffect, useState} from 'react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    title: 'We build what small businesses need',
    subtitle: 'From Bengaluru to small towns — technology that cares.'
  },
  {
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Make smarter decisions with data',
    subtitle: 'Shop Data Analyzer gives simple, actionable insights.'
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
    title: 'Focus your time — block distractions',
    subtitle: 'Shorts Blocker helps teams & owners stay productive.'
  }
];

const Hero = ()=>{
  const [index,setIndex] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setIndex(i=> (i+1)%slides.length),4500);
    return ()=> clearInterval(t);
  },[]);
  return (
    <header className="slider mb-8">
      {slides.map((s,i)=>(
        <div key={i} className={'slide ' + (i===index? 'active':'')} style={{backgroundImage:`url(${s.img})`}}>
          <div className="overlay">
            <div className="hero-card text-center max-w-3xl">
              <div className="text-sm uppercase text-teal-200 mb-2">Bengaluru-based • Serving Tier 2 & 3 cities</div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-3">{s.title}</h1>
              <p className="text-gray-200 mb-5">{s.subtitle}</p>
              <div className="flex gap-4 justify-center">
                <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 text-black font-semibold">Get Started</a>
                <a href="#services" className="px-6 py-3 rounded-full border border-white text-white">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </header>
  )
}
export default Hero;