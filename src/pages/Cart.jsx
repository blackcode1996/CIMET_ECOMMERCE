import React, { useEffect, useState } from "react";
import { trimText } from "../utils/common";
import { useDispatch, useSelector } from "react-redux";
import {  cartData, removeFromCart, updateCart } from "../redux/slice/cartSlice";

import { currencyConvertedData } from "../redux/slice/currencyConvertor";
import { cartDto } from "../dto/cartDto";

const Cart = () => {
  const dispatch=useDispatch()
  const conversionRate = useSelector(currencyConvertedData);
  
  

  const cart=useSelector(cartData)
  // const totalAmount = (cart.reduce((total, item) => total + Number(item.productPrice), 0)*conversionRate).toFixed(1);

  // const discountAmount = (cart.reduce(
  //   (total, item) => total + (Number(item.productActualPrice) - Number(item.productPrice)),
  //   0
  // )*conversionRate).toFixed(1);
 
  const cartDat = cartDto(cart);
  
  const incrementQuantity=({quantity,productId})=>{
    const updatedQuantity=quantity+1
    dispatch(updateCart({id:productId,quantity:updatedQuantity}))

  }
  const decrementQuantity=({quantity,productId})=>{
    const updatedQuantity=quantity-1
    dispatch(updateCart({id:productId,quantity:updatedQuantity}))
  }
  const deleteProductFromCart=(productId)=>{
    dispatch(removeFromCart({id:productId}))
  }


  return (
    <div className="bg-gray-300">
      <div className="p-4 max-w-[80%] mx-auto flex gap-5  justify-center">
        <div className="w-[50%]">
          {/* Delivery Information */}
          <div className="bg-neutral p-4 mb-4">
            <h3 className="text-lg font-bold">Deliver to: Shahzad Malik</h3>
          </div>

          {/* Cart Items */}
          <div className="bg-neutral shadow-md rounded p-4 mb-4  ">
            {cartDat[0].map((item) => (
              <div
                key={item.productId}
                className="flex  items-center border-b pb-4 mb-4 gap-5"
              >
                <div className="">
                  <div className="w-32">

                  <img
                    src={item.productImage}
                    alt={item.productTitle}
                    className="w-full h-16 object-cover mr-4"
                    />
                    </div>

                  <div className="flex items-center mt-2 justify-center">
                    <button  
                className={`flex items-center justify-center w-6 h-6 rounded-2xl ${
                  item.quantity === 1 ? 'bg-gray-300 text-gray-500' : 'bg-primary text-neutral'
              } transition duration-200`}
              disabled={item.productQuantity === 1}  onClick={()=>decrementQuantity({quantity:item.productQuantity,productId:item.productId})}>-</button>
                    <span className="mx-2">{item.productQuantity}</span>
                    <button className={`flex items-center justify-center w-6 h-6  rounded-2xl bg-primary text-neutral transition duration-200`}
               onClick={()=>incrementQuantity({quantity:item.productQuantity,productId:item.productId})}>+</button>
                  </div>
                </div>

                <div className="flex gap-5 ">
                  <div>
                    <h3 className="font-semibold">{item.productTitle}</h3>
                    <p className="text-gray-500">Product Detail</p>
                    <div className="flex  gap-2 align-middle">
                      <p className="text-red-500 line-through">
                        ₹{((item.productActualPrice)*(item.productQuantity)).toFixed(1)}
                      </p>
                      <p className="text-black font-bold">{((item.productPrice)*(item.productQuantity)).toFixed(1)}</p>
                      <p className="text-sm text-green-600">{item.productDiscountPercent}%</p>
                    </div>
                    <button className="text-red-500 hover:underline " onClick={()=>deleteProductFromCart(item.productId)}>
                      Remove
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <p className="text-sm text-gray-500">
                      Delivery by 23rd oct {" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Place Order Button */}
          <div className="mt-4 sticky bottom-0">
            <button className="bg-secondary text-white w-full py-3 rounded hover:bg-orange-600 sticky bottom-0">
              PLACE ORDER
            </button>
          </div>
        </div>
        {/* Price Details */}
        <div className="bg-gray-100 p-4 rounded ">
          <h3 className="font-bold text-lg ">PRICE DETAILS</h3>
          <hr className="mt-2 mb-2 text-2xl" />
          <div className="flex justify-between mb-2">
            <p>Price({cartDat[0].length}items)</p>
            <p>₹{cartDat[1].totalAmount }</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Discount</p>
            <p className="text-green-600">-₹{cartDat[1].discountAmount}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Delivery Charges</p>
            <p className="text-green-600">Free</p>
          </div>
          <hr className="mb-2" />
          <div className="flex justify-between font-bold text-lg">
            <p>Total Amount</p>
            <p>₹{(Number(cartDat[1].totalAmount)-Number(cartDat[1].discountAmount)).toFixed(1)}</p>
          </div>
          <hr className="mt-2 mb-2" />
          <p className="text-green-600 mt-2">
            You will save ₹{cartDat[1].discountAmount} on this order
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
