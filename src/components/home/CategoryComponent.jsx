import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/260px-Arduino_ftdi_chip-1.jpg',
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Londons_Carnaby_Street%2C_1966.jpg',
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/La_cuisine_%28mus%C3%A9e_dart_nouveau%2C_Riga%29_%287563655820%29.jpg/800px-La_cuisine_%28mus%C3%A9e_dart_nouveau%2C_Riga%29_%287563655820%29.jpg',
  },
  {
    id: 4,
    name: 'Beauty',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Rozeta_Pary%C5%BC_notre-dame_chalger.jpg/800px-Rozeta_Pary%C5%BC_notre-dame_chalger.jpg',
  },
  {
    id: 5,
    name: 'Sports',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/300px-Youth-soccer-indiana.jpg',
  },
];

const CategoryComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="relative group">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover rounded-lg transition duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <h2 className="text-white text-lg font-semibold">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
