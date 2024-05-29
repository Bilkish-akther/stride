import React from 'react';

const Accordian = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium text-gray-900">
            Click to open this one and close others
          </div>
          <div className="collapse-content text-gray-700">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-gray-900">
            Click to open this one and close others
          </div>
          <div className="collapse-content text-gray-700">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 rounded-lg shadow-lg">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-gray-900">
            Click to open this one and close others
          </div>
          <div className="collapse-content text-gray-700">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
