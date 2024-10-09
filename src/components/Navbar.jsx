import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="px-4 py-4
    bg-primary text-neutral flex justify-between items-center "
    >
      <h1>
        <Link to="/">Ecommerce</Link>
      </h1>
      <div className="flex  gap-4 align-middle">
        <div className="flex align-middle gap-5 items-center">
          <p>
            <Link to="/products">Product</Link>
          </p>
          <p>
            <Link to="/blog?page=1">Blog</Link>
          </p>
          <p>
            <Link to="/cart">Cart(0)</Link>
          </p>
          <p>Contact Us</p>
        </div>
        <div>
          <select className="p-2 bg-primary">
            <option value="USD" className="bg-primary">
              USD
            </option>
            <option value="INR" className="bg-primary">
              INR
            </option>
            <option value="AUD" className="bg-primary">
              AUD
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
