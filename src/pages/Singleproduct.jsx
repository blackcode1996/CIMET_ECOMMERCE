import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleProduct,
  productLoading,
  singleProductData,
} from "../redux/slice/productSlice";
import productDto from "../dto/productDto";
import SingleProductSkeleton from "../components/skeleton/SingleProductSkeleton";
import AddtoCartButton from "../components/AddtoCartButton";
import { cartData } from "../redux/slice/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const productData = useSelector(singleProductData);
  const isLoading = useSelector(productLoading);
  const { id } = useParams();
  const cart = useSelector(cartData);

  const filterCart = cart.filter((ele) => ele.productId === Number(id));
  const quantity = filterCart.length == 0 ? 0 : filterCart[0].quantity;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const product = productDto(productData);

  if (isLoading) {
    return <SingleProductSkeleton />;
  }

  return (
    <section className="py-10 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
            <p className="font-medium text-lg text-indigo-600 mb-4">
              Travel &nbsp; / &nbsp; Menswear
            </p>
            <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-primary">
              {product.productTitle}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <h6 className="font-manrope font-semibold text-2xl leading-9 text-primary pr-5 sm:border-r border-neutral mr-5">
                ${product.productPrice}
              </h6>
              <h6 className="font-manrope font-light text-2xl leading-9 text-primary pr-5 sm:border-r border-neutral mr-5 line-through">
                ${product.productActualPrice}
              </h6>
              <div className="flex items-center gap-2">
                <Rating rating={product.productRating} />
                <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                  {product.productRatingCount} reviews
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-base font-normal mb-8">
              {product.productDescription}
            </p>
            <div className="block w-full">
              <p className="font-medium text-lg leading-8 text-primary mb-4">
                Color
              </p>
              <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6">
                {["#10B981", "#FBBF24", "#F43F5E", "#2563EB"].map((color) => (
                  <button
                    key={color}
                    className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500"
                  >
                    <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill={color} />
                    </svg>
                  </button>
                ))}
              </div>
              <p className="font-medium text-lg leading-8 text-primary mb-4">
                Size
              </p>
              <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3 mb-6">
                {["56 cm (S)", "67 cm (M)", "77 cm (L)"].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center justify-center w-full">
                  {/* <button className="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M16.5 11H5.5"
                        stroke="#dc2626"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0"
                    placeholder="1"
                  /> */}
                  {/* <button className="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke="#dc2626"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button> */}
                </div>
                {/* <button className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200 border ">
                  Add to cart
                </button> */}
                <AddtoCartButton
                  quantity={quantity}
                  data={{
                    productId: product.productId,
                    productImage: product.productImage,
                    productPrice: product.productPrice,
                    productDiscountPercent: product.productDiscountPercent,
                    productTitle: product.productTitle,
                    productRating: product.productRating,
                    productActualPrice: product.productActualPrice,
                  }}
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-neutural hover:shadow-sm hover:shadow-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184"
                      stroke="#dc2626"
                      strokeWidth="1.6"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="text-center w-full px-5 py-4 rounded-[100px] border border-gray-300 transition-all duration-300 hover:shadow-gray-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={product.productImage}
                alt="Yellow Summer Travel Bag"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
