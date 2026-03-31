import React from 'react';

const Stats = () => {
    const statsData = [
    { label: "Active Users", value: "50K+" },
    { label: "Premium Tools", value: "200+" },
    { label: "Ratings", value: "4.9" },
  ];
    return (
        <div className='w-full'>
            <div className=" bg-purple-600 py-10 rounded-2xl mx-4 md:mx-12 my-10 text-white shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-white/20 md:divide-x">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-4xl font-bold">{stat.value}</span>
            <span className="text-purple-100 opacity-80">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Stats;