import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProducts = () => {
  const shoe = useLoaderData();

  const [title, setTitle] = useState(shoe.title);
  const [price, setPrice] = useState(shoe.price);
  const [brand, setBrand] = useState(shoe.brand);
  const [id, setId] = useState(shoe.id);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { id, title, brand, price, description, image_url };

    await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Product updated successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Failed to update product.');
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.alert('Updating product...');
    handleSubmit(e);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-5xl font-bold text-center mb-8">Edit Product</h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleClick}>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="input input-bordered w-full p-4"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="btn btn-primary w-full p-4"
              type="submit"
              value="Update Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
