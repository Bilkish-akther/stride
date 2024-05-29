import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };

    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success('Product added successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Failed to add product.');
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.alert('Adding product...');
    handleSubmit(e);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center mb-8">Add a Product</h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleClick}>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="image_url"
              placeholder="Image URL"
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="id"
              placeholder="ID"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="btn btn-primary w-full p-4"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
