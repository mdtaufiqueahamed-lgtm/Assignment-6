import React from 'react';

const Steps = () => {
  const stepData = [
    {
      id: 1,
      title: "Choose Your Tool",
      description: "Browse our extensive collection of premium digital tools and select the one that fits your needs.",
      icon: "🔍", 
      bgColor: "bg-purple-50",
    },
    {
      id: 2,
      title: "Add to Cart",
      description: "Simply click the 'Buy Now' button to add your favorite tools to the shopping cart for easy checkout.",
      icon: "🛒",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      title: "Instant Access",
      description: "Complete your checkout and get immediate access to your digital assets without any delay.",
      icon: "⚡",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our platform is designed to be simple and efficient. Follow these three easy steps to start using premium digital tools.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepData.map((step) => (
            <div 
              key={step.id} 
              className="flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center text-4xl mb-6`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;