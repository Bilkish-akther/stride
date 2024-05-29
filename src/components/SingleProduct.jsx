import { Link } from "react-router-dom";

const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <figure className="w-full h-56 overflow-hidden">
        <img src={image_url} alt="Shoes" className="w-full h-full object-cover" />
      </figure>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <h3 className="text-lg font-semibold text-gray-700">{brand}</h3>
        <h3 className="text-lg font-semibold text-green-600">${price}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex justify-end">
          <Link to={`/products/${id}`} className="btn btn-primary">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
