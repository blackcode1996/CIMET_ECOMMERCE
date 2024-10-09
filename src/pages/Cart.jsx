import React, { useState } from 'react';

const Cart = () => {
  // Dummy cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'MarQ by Flipkart 55.88 cm (22 inch) Full HD LED Backlit',
      price: 5299,
      originalPrice: 12999,
      discount: '59%Off',
      seller: 'OmniTechRetail',
      deliveryDate: 'Wed Oct 16',
      deliveryCharge: 40,
      image: 'https://via.placeholder.com/150', // Placeholder for image
    },
    {
      id: 2,
      name: 'Certificate Physical And Human Geography',
      price: 299,
      originalPrice: 335,
      discount: '10%Off',
      seller: 'Mittal Books',
      deliveryDate: 'Wed Oct 16',
      deliveryCharge: 40,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  const discountAmount = cartItems.reduce((total, item) => total + (item.originalPrice - item.price), 0);
  
  return (
    <div className='bg-gray-300'>

    
    <div className="p-4 max-w-[80%] mx-auto flex gap-5 bg-gray-300">

      <div className=''>

      
      {/* Delivery Information */}
      <div className="bg-neutral p-4 mb-4">
        <h3 className="text-lg font-bold">Deliver to: Shahzad Malik</h3>
      </div>

      {/* Cart Items */}
      <div className="bg-neutral shadow-md rounded p-4 mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4  gap-5">
            <div >
            <img src={item.image} alt={item.name} className="w-20 h-16 object-cover mr-4" />
          
            <div className="flex items-center mt-3">
              <button className="border px-2 rounded-2xl">-</button>
              <span className="mx-2">1</span>
              <button className="border px-2 rounded-2xl">+</button>
            </div>
            </div>

            <div className="flex">
              <div>

              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">Product Detail</p>
<div className='flex  gap-2 align-middle'>

              <p className="text-red-500 line-through">₹{item.originalPrice}</p>
              <p className="text-black font-bold">₹{item.price}</p>
              <p className="text-sm text-green-600">{item.discount}</p>
</div>
                <button className="text-red-500 hover:underline ">Remove</button>
              </div>


            <div className="flex ">
              <p className="text-sm text-gray-500">Delivery by {item.deliveryDate} </p>
             
            </div>
            </div>
          </div>
        ))}
      </div>

       {/* Place Order Button */}
       <div className="mt-4">
        <button className="bg-orange-500 text-white w-full py-3 rounded hover:bg-orange-600">
          PLACE ORDER
        </button>
      </div>
</div>
      {/* Price Details */}
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold text-lg ">PRICE DETAILS</h3>
        <hr className='mt-2 mb-2 text-2xl'/>
        <div className="flex justify-between mb-2">
          <p>Price({cartItems.length}items)</p>
          <p>₹{totalAmount + discountAmount}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Discount</p>
          <p className="text-green-600">-₹{discountAmount}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Delivery Charges</p>
          <p className="text-green-600">Free</p>
        </div>
        <hr className='mb-2'/>
        <div className="flex justify-between font-bold text-lg">
          <p>Total Amount</p>
          <p>₹{totalAmount}</p>
        </div>
        <hr className='mt-2 mb-2'/>
        <p className="text-green-600 mt-2">You will save ₹{discountAmount} on this order</p>
      </div>

     
    </div>
    </div>
  );
};

export default Cart;
