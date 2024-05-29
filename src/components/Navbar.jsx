import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="hover:bg-primary hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:bg-primary hover:text-white">Shop</Link>
            </li>
            <li>
            <Link to="/cart" className="hover:bg-primary hover:text-white">Add to Cart</Link>
            </li>
            <li>
              <Link to="/about" className="hover:bg-primary hover:text-white">About</Link>
            </li>
          
            {!user && (
              <>
                <li>
                  <Link to="/login" className="hover:bg-primary hover:text-white">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="hover:bg-primary hover:text-white">Register</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/dashboard" className="hover:bg-primary hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-500 text-white mt-2"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Y Commerce</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="hover:bg-primary hover:text-white">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:bg-primary hover:text-white">Shop</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:bg-primary hover:text-white">Add to Cart</Link>
            </li>
          <li>
            <Link to="/about" className="hover:bg-primary hover:text-white">About</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to="/login" className="hover:bg-primary hover:text-white">Login</Link>
              </li>
              <li>
                <Link to="/register" className="hover:bg-primary hover:text-white">Register</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <Link to="/dashboard" className="hover:bg-primary hover:text-white">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <button
            onClick={handleLogout}
            className="btn bg-red-500 text-white hidden lg:block"
          >
            Logout
          </button>
        )}
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL || "/public/placeholder.jpg"} alt="User Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
