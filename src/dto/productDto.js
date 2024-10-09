import { useDispatch, useSelector } from "react-redux";
import { trimText } from "../utils/common";
import { currencyConvertedData } from "../redux/slice/currencyConvertor";

const productDto = (data, limit) => {
  const conversionRate=useSelector(currencyConvertedData)


  
  const limitedData = limit && data.length ? data.slice(0, limit) : data;

  return limitedData.map((item) => ({
    productId: item.id,
    productImage: item.image,
    productPrice: parseFloat(item.price).toFixed(1)*conversionRate, 
    productDiscountPercent: 10,
    productTitle: trimText(item.title),
    productRating: item.rating.rate,
    productActualPrice: parseFloat(item.price + (0.1 * item.price)).toFixed(1)*conversionRate, 
  }));
};

export default productDto;
