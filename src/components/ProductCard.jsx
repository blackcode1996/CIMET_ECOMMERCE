import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductCard = ({
  productId,
  productImage,
  productPrice,
  productDiscountPercent,
  productTitle,
  productRating,
  productActualPrice,
}) => {
  const fullStars = Math.floor(productRating);
  const hasHalfStar = productRating % 1 >= 0.5;
  const totalStars = 5;
  const quantity = 0;

  const starColor =
    productRating >= 4.5
      ? "text-green-500"
      : productRating >= 3.5
      ? "text-yellow-300"
      : productRating >= 2.5
      ? "text-orange-500"
      : "text-red-500";

  return (
    <div className="m-4 flex w-full max-w-xs sm:max-w-sm md:max-w-md flex-col rounded-xl border border-gray-100 bg-neutral shadow-md">
      <Link to={`/products/${productId}`}>
        <div className="relative mx-3 mt-2 flex h-full overflow-hidden rounded-xl justify-center">
          <img
            className="object-cover w-[300px] h-[300px]"
            src={productImage}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-primary px-2 text-center text-sm font-medium text-neutral">
            {productDiscountPercent}%
          </span>
        </div>
      </Link>

      <div className="mt-4 px-5 pb-5">
        <Link to={`/products/${productId}`}>
          <h5 className="text-xl tracking-tight text-primary hover:text-cyan-600">
            {productTitle}
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl p-2 font-bold text-primary">
              ${productPrice}
            </span>
            <span className="text-sm text-primary line-through">
              ${productActualPrice}
            </span>
          </p>
          <Rating rating={productRating} />
        </div>
        {quantity === 0 ? (
          <button
            className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-neutral hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-secondary w-full"
            // onClick={handleCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        ) : (
          <div className="flex justify-center space-x-2 w-full">
            <button
              //   onClick={decrementQuantity}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-neutral text-primary hover:bg-gray-300 transition duration-200"
            >
              <i className="fa-solid fa-minus"></i>
            </button>

            <span className="mx-2 text-lg font-semibold">{quantity}</span>

            <button
              //   onClick={incrementQuantity}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-neutral text-primary hover:bg-gray-300 transition duration-200"
            >
              <i className="fa-solid fa-plus"></i>
            </button>

            <button
              //   onClick={deleteProductFromCart}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-200"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
