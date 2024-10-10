import { useSelector } from "react-redux";
import { currencyConvertedData } from "../redux/slice/currencyConvertor";

export const cartDto=(data)=>{
    const conversionRate = useSelector(currencyConvertedData);
    
  
    const cartArray= data.map((item) => ({
      productId: item.productId,
      productImage: item.productImage,
      productPrice: (item.productPrice * conversionRate).toFixed(1),
      productDiscountPercent: item.productDiscountPercent,
      productTitle: item.productTitle,
      productActualPrice: (item.productActualPrice* conversionRate).toFixed(1),
      productQuantity: item.quantity,
      
    }));
    const totalAmount = (cartArray.reduce((total, item) => total + Number((item.productPrice)*item.productQuantity), 0)*conversionRate).toFixed(1);
  console.log(totalAmount,"totalAmount in dto")
    const discountAmount = (cartArray.reduce(
      (total, item) => total + (Number((item.productActualPrice)*(item.productQuantity)) - Number((item.productPrice)*(item.productQuantity))),
      0
    )*conversionRate).toFixed(1);
    const cartDtoArray=[cartArray,{totalAmount:totalAmount,discountAmount:discountAmount}]
    return cartDtoArray
  }
  