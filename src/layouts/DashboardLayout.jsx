import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/5 bg-gray-800 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4 flex-1">
          <li className="border-b border-gray-600 p-2 hover:bg-gray-700 rounded">
            <Link to={"/dashboard"} className="block text-lg">
              Dashboard
            </Link>
          </li>
          <li className="border-b border-gray-600 p-2 hover:bg-gray-700 rounded">
            <Link to={"/dashboard/all-products"} className="block text-lg">
              All Products
            </Link>
          </li>
          <li className="border-b border-gray-600 p-2 hover:bg-gray-700 rounded">
            <Link to={"/dashboard/add-products"} className="block text-lg">
              Add Product
            </Link>
          </li>
          <li className="border-b border-gray-600 p-2 hover:bg-gray-700 rounded">
            <Link to={"/"} className="block text-lg">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
