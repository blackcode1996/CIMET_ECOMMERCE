import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { addToCart, cartData, removeFromCart, updateCart } from "../redux/slice/cartSlice";
import { FaTrash } from "react-icons/fa";
import AddtoCartButton from "./AddtoCartButton";

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
  const cart=useSelector(cartData)
  
  const filterCart=cart.filter((ele)=>ele.productId===productId)
  // console.log(filterCart,"filterCart")
   const quantity=filterCart.length==0?0:filterCart[0].quantity
 

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
        <AddtoCartButton quantity={quantity} data={{

          productId,
          productImage,
          productPrice,
          productDiscountPercent,
          productTitle,
          productRating,
          productActualPrice,
        }
        }/>
              </div>
    </div>
  );
};

export default ProductCard;
