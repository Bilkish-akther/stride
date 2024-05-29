import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      await fetch(`http://localhost:3000/shoes/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          onDelete(id);
          toast.success('Product deleted successfully!');
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error('Failed to delete product.');
        });
    }
  };

  return (
    <div className="card w-full sm:w-96 bg-base-100 shadow-xl transition transform hover:scale-105">
      <ToastContainer />
      <figure>
        <img src={image_url} alt="Shoes" className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <h3 className="text-lg font-semibold text-gray-700">{brand}</h3>
        <h3 className="text-lg font-semibold text-green-600">${price}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="card-actions justify-end mt-4">
          <Link to={`/products/${id}`} className="btn btn-primary">
            See details
          </Link>
          <Link to={`edit/${id}`} className="btn btn-secondary">
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
