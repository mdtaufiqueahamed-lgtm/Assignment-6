import React from 'react';

const ProductCard = ({ product, handleAddToCart, cart }) => {
  const { name, description, price, period, tag, features, icon } = product;

  return (
    <div className="card bg-white border border-gray-100 shadow-sm p-6 rounded-2xl relative">
      <div className="absolute top-4 right-4">
        <span className="badge badge-secondary bg-purple-100 text-purple-600 border-none px-4 py-3 capitalize">
          {tag}
        </span>
      </div>
      <div className="mb-4">
        <img src={icon} alt={name} className="w-14 h-14 object-contain" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-400 text-sm">/{period}</span>
      </div>
      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
             ✅ {feature}
          </div>
        ))}
      </div>
      {/* লাইন ২৯ এর আশেপাশে */}
<button 
  onClick={() => handleAddToCart(product)}
  className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 border-none rounded-xl"
>
  {cart.find(item => item.id === product.id) ? "Added to Cart" : "Buy Now"}
</button>
    </div>
  );
};

export default ProductCard;