import { trimText } from "../utils/common";

const productDto = (data, limit) => {
  const limitedData = limit && data.length ? data.slice(0, limit) : data;

  return limitedData.map((item) => ({
    productId: item.id,
    productImage: item.image,
    productPrice: parseFloat(item.price).toFixed(1), 
    productDiscountPercent: 10,
    productTitle: trimText(item.title,4),
    productRating: item.rating.rate,
    productActualPrice: parseFloat(item.price + (0.1 * item.price)).toFixed(1), 
  }));
};

export default productDto;
