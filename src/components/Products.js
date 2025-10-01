import React from 'react';
const products = [
  {title:'Shorts Blocker', subtitle:'Focus mode for phones and teams', desc:'Block distracting short video feeds and install a focus layer for productivity.'},
  {title:'Shop Data Analyzer', subtitle:'Sales insights for shopkeepers', desc:'Upload or connect sales and get auto insights, best-seller detection and reorder suggestions.'}
];
const Products = ()=> (
  <section id="products" className="section fade-up">
    <h3 className="text-2xl font-bold mb-6">Products</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {products.map((p,i)=>(
        <div key={i} className="card flex gap-4 items-center">
          <div className="w-24 h-24 rounded-lg bg-gradient-to-tr from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-black">{p.title.split(' ').map(w=>w[0]).join('')}</div>
          <div>
            <h4 className="font-semibold text-white">{p.title}</h4>
            <div className="text-gray-300">{p.subtitle}</div>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <a href="#contact" className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-600 text-black rounded-full">Request Demo</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Products;