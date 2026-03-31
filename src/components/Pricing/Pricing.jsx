// import React from 'react';

// const Pricing = () => {
//   const plans = [
//     {
//       name: "Free",
//       price: "0",
//       description: "Perfect for hobbyists and students starting their journey.",
//       features: ["10 Projects", "Basic Support", "Public Tools Access"],
//       buttonText: "Get Started",
//       isPopular: false,
//     },
//     {
//       name: "Pro",
//       price: "49",
//       description: "Best for professionals and small teams who need more power.",
//       features: ["Unlimited Projects", "Priority Support", "Advanced Analytics", "Custom Domain"],
//       buttonText: "Upgrade to Pro",
//       isPopular: true, // এটি জনপ্রিয় প্ল্যান হিসেবে হাইলাইট হবে
//     },
//     {
//       name: "Enterprise",
//       price: "99",
//       description: "Scalable solutions for large organizations and agencies.",
//       features: ["Everything in Pro", "Dedicated Manager", "SLA Guarantee", "Custom Integration"],
//       buttonText: "Contact Sales",
//       isPopular: false,
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
//           <p className="text-gray-500">Choose the plan that works best for you and your business.</p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan, index) => (
//             <div 
//               key={index} 
//               className={`relative flex flex-col p-8 rounded-3xl bg-white border ${
//                 plan.isPopular ? "border-purple-600 shadow-xl scale-105 z-10" : "border-gray-100"
//               }`}
//             >
//               {plan.isPopular && (
//                 <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
//                   Most Popular
//                 </span>
//               )}

//               <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
//               <p className="text-gray-500 text-sm mb-6 h-12">{plan.description}</p>
              
//               <div className="mb-8">
//                 <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
//                 <span className="text-gray-400">/month</span>
//               </div>

//               <ul className="space-y-4 mb-10 flex-grow">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
//                     <span className="text-green-500 font-bold">✓</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <button 
//                 className={`w-full py-4 rounded-xl font-bold transition-all ${
//                   plan.isPopular 
//                     ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200" 
//                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//                 }`}
//               >
//                 {plan.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;