import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="p-10 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <p>"ACME Industries has transformed our business with their cutting-edge tech solutions."</p>
            <h3 className="card-title mt-4">John Doe</h3>
            <p className="text-sm">CEO, TechCorp</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <p>"Reliable and innovative, ACME Industries delivers every time. Highly recommended!"</p>
            <h3 className="card-title mt-4">Jane Smith</h3>
            <p className="text-sm">CTO, InnovateX</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <p>"Their support and expertise are unmatched. ACME Industries is our go-to tech partner."</p>
            <h3 className="card-title mt-4">Robert Johnson</h3>
            <p className="text-sm">Head of IT, GlobalTech</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
