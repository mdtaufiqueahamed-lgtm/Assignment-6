import React from 'react';

const Cart = ({ cart, handleRemove, handleCheckout }) => {
    return (
        <div>
            

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50">
      <h2 className="text-2xl font-bold mb-6">Your Cart ({cart.length})</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <img src={item.icon} alt={item.name} className="w-12 h-12" />
                <div>
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <button 
                onClick={() => handleRemove(item.id)}
                className="btn btn-ghost text-red-500 hover:bg-red-50 rounded-full"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Checkout Area */}
          <div className="mt-10 border-t pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium">Total Amount</span>
              <span className="text-2xl font-bold text-purple-600">
                ${cart.reduce((sum, item) => sum + parseFloat(item.price), 0)}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 border-none rounded-xl h-14"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  

        </div>
    );
};

export default Cart;