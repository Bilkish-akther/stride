import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 50, image: 'https://source.unsplash.com/400x300/?product1' },
  { id: 2, name: 'Product 2', price: 30, image: 'https://source.unsplash.com/400x300/?product2' },
  { id: 3, name: 'Product 3', price: 70, image: 'https://source.unsplash.com/400x300/?product3' },
  { id: 4, name: 'Product 4', price: 40, image: 'https://source.unsplash.com/400x300/?product4' },
];

const AddToCartPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Add to Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Products List */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="relative group bg-white shadow-md rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Cart</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((product, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-700 transition duration-300"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Total: ${getTotalPrice()}</h3>
              <button className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
