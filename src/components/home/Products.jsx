import React from 'react';
import SingleProduct from '../SingleProduct';

const Products = ({ data }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="my-8 text-3xl font-bold text-center text-gray-800">
                Check Our Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map(shoe => (
                    <SingleProduct key={shoe.id} shoe={shoe} />
                ))}
            </div>
        </div>
    );
};

export default Products;
