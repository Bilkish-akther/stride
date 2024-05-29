import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-800 mb-6">{title}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8">
        <img className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0" src={image_url} alt="product" />
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-green-600">${price}</h3>
          <h3 className="text-xl font-semibold text-gray-700">{brand}</h3>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
