import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
          className="w-full h-full object-cover"
          alt="Business School campus"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Future with Accman</h1>
          <p className="text-xl md:text-2xl mb-8">Leading Business School for Future Leaders and Entrepreneurs</p>
          <button className="bg-sky-400 hover:bg-sky-500 text-white text-lg px-8 py-3 rounded-full transition duration-300">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}