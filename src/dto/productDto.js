import { useSelector } from "react-redux";
import { trimText } from "../utils/common";
import { currencyConvertedData } from "../redux/slice/currencyConvertor";

const productDto = (data, limit) => {

     console.log(data);

  const conversionRate = useSelector(currencyConvertedData);

  if (Array.isArray(data)) {
    const limitedData = limit && data.length ? data.slice(0, limit) : data;
    return limitedData.map((item) => ({
      productId: item._id      ,
      productImage: item.url,
      productPrice: Number(parseFloat(item.price * conversionRate).toFixed(1)),
      productDiscountPercent: 10,
      productTitle: trimText(item.name, 4),
      productRating: item.totalRating? item.totalRating: 3, 
      productActualPrice: Number(parseFloat(
        (item.price + 0.1 * item.price) * conversionRate
      ).toFixed(1)),
    }));
  } else {
    return {
      productId: data.id,
      productImage: data.image,
      productPrice: Number(parseFloat(data.price * conversionRate).toFixed(1)),
      productDiscountPercent: 10,
      productTitle: data.title,
      productDescription: data.description,
      productRating: data?.rating?.rate,
      productRatingCount: data?.rating?.count,
      productActualPrice: parseFloat(
        (data.price + 0.1 * data.price) * conversionRate
      ).toFixed(1),
    };
  }
};

export default productDto;
