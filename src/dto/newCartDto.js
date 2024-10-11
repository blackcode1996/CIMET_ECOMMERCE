import { useSelector } from "react-redux";
import { currencyConvertedData } from "../redux/slice/currencyConvertor";

export const newCartDto=(data)=>{
    const conversionRate = useSelector(currencyConvertedData);
    
  
    const cartArray= data.map((item) => ({
      productId: item.product._id,
      productImage: item.attributes.url,
      productPrice: (item.attributes.price * conversionRate).toFixed(1),
      productDiscountPercent: 0,
      productTitle: item.attributes.name,
      productDescription:item.attributes.description,
      productActualPrice: (item.attributes.price * conversionRate).toFixed(1),
      productQuantity: item.quantity,
      
    }));
    const totalAmount = (cartArray.reduce((total, item) => total + Number((item.productPrice)*item.productQuantity), 0)*conversionRate).toFixed(1);
    const discountAmount=0
    const cartDtoArray=[cartArray,{totalAmount:totalAmount,discountAmount:discountAmount}]
    return cartDtoArray
  }
  