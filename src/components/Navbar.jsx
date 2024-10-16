import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegUserCircle, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencyData } from "../redux/slice/currencyConvertor";
import UserProfileModal from "./UserProfileComponent";
import { cartData } from "../redux/slice/cartSlice";
import ToolTip from "./ToolTip";
import token from "../utils/token";

const Navbar = () => {
  const cart = useSelector(cartData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("John Doe");
  // const [cartLength,setCartLength]=useState(cart.length ? cart.length : 0);
  const [cartLength, setCartLength] = useState(cart.length);
  const modalRef = useRef();

  const isAuth = token();

  const dispatch = useDispatch();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 550);
  };

  const currencyConvertorHandler = (e) => {
    dispatch(fetchCurrencyData(e.target.value));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);


  return (
    <div
      className={`sticky top-0 z-10 ${
        isScrolled
          ? "backdrop-filter backdrop-blur-lg bg-opacity-30"
          : "bg-primary"
      } px-10 text-[20px]`}
    >
      <header
        className={`px-4 py-4 ${
          isScrolled ? "text-primary" : "text-neutral"
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
            <Link to="/products" className="hover:text-red-500">
              Product
            </Link>
            <Link to="/blog?page=1" className="hover:text-red-500">
              Blog
            </Link>

              {cartLength > 0 ? (
            <Link to="/cart" className="hover:text-red-500">
                Cart({cartLength})
            </Link>
              ) : (
                <ToolTip mainText={"Cart"} textTooBeShown={"Your Cart is Empty"} bgColor={isScrolled?"primary":"neutral"}/>
              )}
            <Link to="/contact-us" className="hover:text-red-500">
              Contact
            </Link>
          </div>
          <div>
            <select
              className="bg-primary text-white hover:text-red-500 "
              onChange={currencyConvertorHandler}
            >
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
          <div onClick={toggleModal} className="cursor-pointer">
            <FaRegUserCircle
              className={`text-2xl hover:text-red-500 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            />
          </div>
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
            <Link
              to="/products"
              className="py-2 hover:text-red-500"
              onClick={toggleMenu}
            >
              Product
            </Link>
            <Link
              to="/blog?page=1"
              className="py-2 hover:text-red-500"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/cart"
              className="py-2 hover:text-red-500"
              onClick={toggleMenu}
            >
              Cart(0)
            </Link>
            <Link
              to="/"
              className="py-2 hover:text-red-500"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>

          <div>
            <select
              className=" bg-primary text-base"
              onChange={currencyConvertorHandler}
            >
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

      {isModalOpen && (
        <div ref={modalRef}>
        <UserProfileModal
          isLoggedIn={isAuth}
          username={username}
          setIsModalOpen={setIsModalOpen}
          closeModal={() => {
            setIsLoggedIn(false)
          }}
        />
        </div>
      )}
    </div>
  );
};

export default Navbar;
