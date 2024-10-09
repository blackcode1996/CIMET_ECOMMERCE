import React, { useEffect } from "react";
import mobileMockup from "../assests/mobile.png";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productData } from "../redux/slice/productSlice";
import productDto from "../dto/productDto"; 
import Heading from "../components/Heading";

const Home = () => {
  const dispatch = useDispatch();
  const rawProducts = useSelector(productData);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = productDto(rawProducts, 6);

  return (
    <div className="overflow-hidden relative">
      <div className="absolute w-[300%] h-[70%] bg-primary left-1/2 bottom-1/2 transform -translate-x-1/2 skew-y-[-15deg] rounded-full z-[-1]"></div>

      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-8 py-16 lg:py-0 text-neutral">
        <div className="lg:w-1/2 mb-8 lg:mb-0 p-5">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            CIMET <span className="text-secondary">E-Commerce</span>
          </h1>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ultricies elit in urna euismod, sit amet luctus felis commodo.
          </p>
          <button className="p-4 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-red-500 transition duration-300 flex items-center gap-2">
            <Link to="/products">Let's Start Shopping </Link>
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

      {/* Heading for Featured Products */}
      <Heading text={"Featured Products"}/>

    {/* Products Card for featured products */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
            productImage={product.productImage}
            productPrice={product.productPrice}
            productDiscountPercent={product.productDiscountPercent}
            productTitle={product.productTitle}
            productRating={product.productRating}
            productActualPrice={product.productActualPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
