import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount }) => {
   
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-12 sticky top-0 z-50">
             <a className="text-2xl font-bold text-purple-600">DigiTools</a>


<div className="flex-1">
       
            </div>
            
      <div className="flex justify-between items-center gap-4 mr-10">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
                <div className='flex items-center justify-between gap-4'>
                    <ShoppingCart />
                    <span>{cartCount}</span>
                    <h4>Login</h4>
                     <button className="btn btn-primary bg-purple-600 border-none rounded-full px-6">Get Started</button>
        </div>
       
      </div>

            </div>
            
        
    );
};

export default Navbar;