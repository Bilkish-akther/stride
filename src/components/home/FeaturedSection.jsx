import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="p-10 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="card-body p-6">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z"></path>
              </svg>
              <h3 className="card-title text-2xl font-semibold">Feature One</h3>
            </div>
            <p>Detail about feature one. It provides great value and improves efficiency.</p>
          </div>
        </div>
        <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="card-body p-6">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="card-title text-2xl font-semibold">Feature Two</h3>
            </div>
            <p>Detail about feature two. It is designed to enhance user experience and productivity.</p>
          </div>
        </div>
        <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="card-body p-6">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
              </svg>
              <h3 className="card-title text-2xl font-semibold">Feature Three</h3>
            </div>
            <p>Detail about feature three. It integrates seamlessly with existing systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
