import { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Stats from './components/Stats/Stats';
import ToggleSection from './components/ToggleSection/ToggleSection';
import Cart from './components/Cart/Cart';
import ProductCard from './components/ProductCard/ProductCard';
import Steps from './components/Steps/Steps';
import Pricing from './components/Pricing/Pricing';

function App() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
  fetch('/public/product.json')
    .then(res => res.json())
    .then(data => {
       console.log("My Data:", data); 
       setProducts(data);
    })
}, []);

  
  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success("পণ্যটি কার্টে যোগ করা হয়েছে!");
    } else {
      toast.warn("এটি ইতিমধ্যে কার্টে আছে।");
    }
  };

  
  const handleRemove = (id) => {
    const remainingCart = cart.filter(item => item.id !== id);
    setCart(remainingCart);
    toast.error("পণ্যটি সরিয়ে ফেলা হয়েছে।");
  };

  
  const handleCheckout = () => {
    if (cart.length > 0) {
      setCart([]);
      toast.info("চেকআউট সফল হয়েছে!");
    }
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      {/* <Banner /> */}
      {/* <Stats /> */}
      
      {/* <ToggleSection 
        showCart={showCart} 
        setShowCart={setShowCart} 
        cartCount={cart.length} 
      /> */}

      {/* <div className="container mx-auto px-4 pb-20">
        {!showCart ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
            {/* {products.map(product => (
  <ProductCard 
    key={product.id} 
    product={product} 
    handleAddToCart={handleAddToCart} 
    cart={cart} 
  />
))} */}
          {/* </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <Cart 
              cart={cart} 
              handleRemove={handleRemove} 
              handleCheckout={handleCheckout} 
            />
          </div>
        )}
      </div> */}

      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
      {/* <Steps></Steps>
      <Pricing></Pricing> */}
    </>
  );
}

export default App;
