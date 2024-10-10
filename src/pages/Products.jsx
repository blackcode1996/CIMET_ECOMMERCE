import React, { useEffect, useState } from "react";
import CarouselCustom from "../components/CarouselCustom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  productData,
  productLoading,
} from "../redux/slice/productSlice";
import productDto from "../dto/productDto";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/skeleton/ProductCardSkeleton";
import Pagination from "../components/Pagination";
import Heading from "../components/Heading";

const Products = () => {
  const dispatch = useDispatch();
  const rawProducts = useSelector(productData);
  const isLoading = useSelector(productLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const productDataLength = 18;
  const dataPerPage = 6;
  const totalPages = productDataLength / dataPerPage;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  const products = productDto(rawProducts, productDataLength);

  return (
    <div>
      <CarouselCustom />
      <Heading
        text={"All Products"}
        textColor={"primary"}
        fromGradient={"secondary"}
        toGradient={"primary"}
      />

      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products
              .slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage)
              .map((product) => (
                <ProductCard
                  key={product.productId}
                  productId={product.productId}
                  productImage={product.productImage}
                  productPrice={product.productPrice}
                  productDiscountPercent={product.productDiscountPercent}
                  productTitle={product.productTitle}
                  productRating={product.productRating}
                  productActualPrice={product.productActualPrice}
                />
              ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default Products;
