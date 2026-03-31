import React from 'react';

const Subscribe = () => {
  return (
    <section className="py-20"> 
      <div className="w-full bg-[#7C3AED] p-8 md:p-20 text-center relative overflow-hidden">
        
        
        
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mt-24"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-black/10 rounded-full -mr-24 -mb-24"></div>

        <div className="relative z-10 max-w-5xl mx-auto"> 
          <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to level up your <br className="hidden md:block" /> digital workflow?
          </h2>
          <p className="text-purple-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
            Join 10,000+ professionals getting weekly updates on the best digital tools and exclusive discounts.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" 
                onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-8 py-5 rounded-2xl bg-white text-gray-800 outline-none focus:ring-4 focus:ring-purple-300 transition-all text-lg"
              required
            />
            <button
              type="submit"
              className="px-10 py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Subscribe
            </button>
          </form>

          <p className="text-purple-200 text-sm mt-8 opacity-80">
            We care about your data. Read our <span className="underline cursor-pointer hover:text-white">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;