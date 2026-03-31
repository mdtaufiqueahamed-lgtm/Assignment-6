import React from 'react';

const ToggleSection = ({ showCart, setShowCart, cartCount }) => {
    return (
        <div>
            
<div className="flex flex-col items-center my-12">
      {/* Title & Description */}
      <h2 className="text-3xl font-bold text-[#1A1919] mb-4">Premium Digital Tools</h2>
      <p className="text-gray-500 text-center max-w-lg mb-8 px-4">
        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>

      {/* Actual Toggle Container */}
      <div className="bg-white border border-gray-100 p-2 rounded-full shadow-sm inline-flex gap-2">
        {/* Products Button */}
        <button
          onClick={() => setShowCart(false)}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            !showCart 
              ? "bg-[#7C3AED] text-white shadow-lg" 
              : "bg-transparent text-gray-600 hover:bg-gray-50"
          }`}
        >
          Products
        </button>

        {/* Cart Button */}
        <button
          onClick={() => setShowCart(true)}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            showCart 
              ? "bg-[#7C3AED] text-white shadow-lg" 
              : "bg-transparent text-gray-600 hover:bg-gray-50"
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  


            
        </div>
    );
};

export default ToggleSection;