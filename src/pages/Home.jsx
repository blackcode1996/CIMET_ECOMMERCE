import React from "react";
import mobileMockup from "../assests/mobile.png";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { FaShoppingBag } from "react-icons/fa";

const Home = () => {
  const products = [
    {
      productId: 1,
      productImage: "https://via.placeholder.com/150",
      productPrice: 19.99,
      productTitle: "Product 1",
      productRating: 4.5,
      productActualPrice: 29.99,
    },
    {
      productId: 2,
      productImage: "https://via.placeholder.com/150",
      productPrice: 24.99,
      productTitle: "Product 2",
      productRating: 3.8,
      productActualPrice: 34.99,
    },
    {
      productId: 3,
      productImage: "https://via.placeholder.com/150",
      productPrice: 14.99,
      productTitle: "Product 3",
      productRating: 4.2,
      productActualPrice: 19.99,
    },
    {
      productId: 4,
      productImage: "https://via.placeholder.com/150",
      productPrice: 39.99,
      productTitle: "Product 4",
      productRating: 4.9,
      productActualPrice: 49.99,
    },
    {
      productId: 5,
      productImage: "https://via.placeholder.com/150",
      productPrice: 39.99,
      productTitle: "Product 5",
      productRating: 4.9,
      productActualPrice: 49.99,
    },
    {
      productId: 6,
      productImage: "https://via.placeholder.com/150",
      productPrice: 39.99,
      productTitle: "Product 6",
      productRating: 4.9,
      productActualPrice: 49.99,
    },
  ];

  return (
    <>
      <div>
        <div className="absolute w-[300%] h-[300%] bg-primary left-1/2 bottom-1/2 transform -translate-x-1/2 skew-y-[-15deg] rounded-full z-[-1]"></div>

        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-8 py-16 lg:py-0 text-neutral">
          <div className="lg:w-1/2 mb-8 lg:mb-0 p-5">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              CIMET <span className="text-secondary">E-Commerce</span>
            </h1>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ultricies elit in urna euismod, sit amet luctus felis
              commodo.
            </p>
            <button className="p-4 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-red-500 transition duration-300 flex items-center gap-2">
              <Link to="/products">Let's Start Shopping </Link>{" "}
              <span>
                <FaShoppingBag />
              </span>
            </button>
          </div>

          <div className="lg:w-[300px] flex justify-center py-12">
            <img
              src={mobileMockup}
              alt="Mobile mockup"
              className="w-[300px] md:w-[300px] lg:w-[450px] drop-shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.productId}
              productId={product.productId}
              productImage={product.productImage}
              productPrice={product.productPrice}
              productTitle={product.productTitle}
              productRating={product.productRating}
              productActualPrice={product.productActualPrice}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
