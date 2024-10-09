import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegUserCircle, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 ${
        isScrolled
          ? "backdrop-filter backdrop-blur-lg bg-opacity-30"
          : "bg-black"
      } px-10`}
    >
      <header
        className={`px-4 py-4 ${
          isScrolled ? "text-black" : "text-neutral"
        }  flex justify-between items-center `}
      >
        <h1>
          <Link to="/">Ecommerce</Link>
        </h1>

        <div className="flex items-center md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className="hidden md:flex py-2 gap-5">
          <div className="flex gap-5">
          <Link to="/products" className="hover:text-red-500">Product</Link>
            <Link to="/blog?page=1" className="hover:text-red-500">Blog</Link>
            <Link to="/cart" className="hover:text-red-500">Cart(0)</Link>
            <p className="hover:text-red-500">Contact Us</p>
          </div>
          <div>
            <select className="bg-primary text-white hover:text-red-500 p-1">
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
          <Link to="/profile">
            <FaRegUserCircle className={`text-2xl hover:text-red-500 ${isScrolled?'text-black':'text-white'}` }/>
          </Link>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="absolute bg-primary text-white  flex  md:hidden w-[100%] px-4 gap-20 items-center justify-center pb-5">
          <div>
            <Link to="/">
              <FaRegUserCircle className="text-2xl text-red-500" />
            </Link>
          </div>
          <div className="flex flex-col">
            <Link to="/products" className="py-2 hover:text-red-500" onClick={toggleMenu}>
              Product
            </Link>
            <Link to="/blog?page=1" className="py-2 hover:text-red-500" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/cart" className="py-2 hover:text-red-500" onClick={toggleMenu}>
              Cart(0)
            </Link>
            <Link to="/" className="py-2 hover:text-red-500" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>

          <div>
            <select className=" bg-primary text-base">
              <option value="USD" className="bg-primary text-sm">
                USD
              </option>
              <option value="INR" className="bg-primary text-sm">
                INR
              </option>
              <option value="AUD" className="bg-primary text-sm">
                AUD
              </option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
