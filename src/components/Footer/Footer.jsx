import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                D
              </div>
              
              <span className="text-xl font-bold text-white tracking-tight">
                Digi<span className="text-purple-400">Tools</span>
              </span>
            </div>
          
            <p className="text-gray-400 text-sm leading-relaxed">
              Simplify your digital journey with the best tools and resources. The trusted platform preferred by professionals worldwide.
            </p>
            <div className="flex gap-4">
             
              {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                <div key={social} className="w-9 h-9 rounded-full bg-white/5 border border-gray-700 flex items-center justify-center cursor-pointer hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all text-gray-500 text-xs">
                  {social[0]}
                </div>
              ))}
            </div>
          </div>

         
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="opacity-70">📍</span> Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-3 hover:text-purple-400 cursor-pointer transition-colors">
                <span className="opacity-70">📧</span> support@digitools.com
              </li>
              <li className="flex items-center gap-3">
                <span className="opacity-70">📞</span> +880 1234-567890
              </li>
            </ul>
          </div>
        </div>

        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} DigiTools. All rights reserved by Web Developer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;