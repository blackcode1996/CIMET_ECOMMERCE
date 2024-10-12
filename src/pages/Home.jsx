import { useEffect } from "react";
import mobileMockup from "../assests/mobile.png";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/skeleton/ProductCardSkeleton"; 
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productData, productLoading } from "../redux/slice/productSlice"; 
import productDto from "../dto/productDto";
import Heading from "../components/Heading";

const Home = () => {
  const dispatch = useDispatch();
  const rawProducts = useSelector(productData);
  const isLoading = useSelector(productLoading); 


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = productDto(rawProducts, 6);

  return (
    <div className="overflow-hidden relative p-4">
      {/* SVG Background */}
      <div className="absolute inset-0 z-[-1]">
        <svg
          className="w-full h-[990px] animate-wave"
          viewBox="0 0 500 200"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
            fill="#020617"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
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
      <Heading text={"Featured Products"} textColor={"primary"} />

      {/* Products Card for featured products */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products.map((product) => (
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
