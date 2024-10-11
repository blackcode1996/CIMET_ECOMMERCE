import React, { useState, useEffect } from "react";
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
  
  const [filters, setFilters] = useState({
    category: "",
    rating: "",
    priceRange: [0, 10000],
    stock: "",
    brand: "",
  });
  const [sortBy, setSortBy] = useState("asc");
  const dataPerPage = 6;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = productDto(rawProducts);


  const filteredProducts = products?.filter((product) => {
    const withinPriceRange =
      product.productPrice >= filters.priceRange[0] &&
      product.productPrice <= filters.priceRange[1];

    const matchesCategory = filters.category
      ? product.category === filters.category
      : true;

    const matchesStock =
      filters.stock === "in-stock" ? product.stock > 0 : true;

    const matchesBrand = filters.brand
      ? product.brand === filters.brand
      : true;

    const matchesRating =
      filters.rating ? product.productRating >= filters.rating : true;

    return (
      withinPriceRange &&
      matchesCategory &&
      matchesStock &&
      matchesBrand &&
      matchesRating
    );
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "asc") {
      return a.productPrice - b.productPrice;
    }
    return b.productPrice - a.productPrice;
  });

  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * dataPerPage,
    currentPage * dataPerPage
  );

  return (
    <div className="p-4">
      <CarouselCustom />

      <Heading
        text={"All Products"}
        textColor={"primary"}
        fromGradient={"secondary"}
        toGradient={"primary"}
      />

      <div className="flex flex-col md:flex-row mt-4">
        <aside className="w-full md:w-1/4 p-4 border-r md:border-b-0 lg:border-gray-500 md:border-r-0 md:pr-4">
          <h2 className="text-lg font-bold mb-4">Filters</h2>

          <div className="mb-4">
            <h3 className="font-semibold">Category</h3>
            <select
              className="border rounded w-full p-1"
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </select>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Stock</h3>
            <select
              className="border rounded w-full p-1"
              onChange={(e) =>
                setFilters({ ...filters, stock: e.target.value })
              }
            >
              <option value="">All Items</option>
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Brand</h3>
            <select
              className="border rounded w-full p-1"
              onChange={(e) =>
                setFilters({ ...filters, brand: e.target.value })
              }
            >
              <option value="">All Brands</option>
              <option value="puma">Puma</option>
              <option value="adidas">Adidas</option>
            </select>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Rating</h3>
            <select
              className="border rounded w-full p-1"
              onChange={(e) =>
                setFilters({ ...filters, rating: e.target.value })
              }
            >
              <option value="">All Ratings</option>
              <option value="4">4 stars & above</option>
              <option value="3">3 stars & above</option>
            </select>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Price Range</h3>
            <input
              type="range"
              max={"10000"}
                className="border rounded w-full p-1 mb-2"
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [e.target.value, filters.priceRange[1]],
                })
              }
            />
            <p>
              Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </p>
          </div>
        </aside>

        <main className="flex-grow p-4">
          <div className="flex items-center justify-end mb-4">
            <select
              className="border rounded w-full md:w-1/4 p-1"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="asc">Sort by Price: Low to High</option>
              <option value="desc">Sort by Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              : displayedProducts.map((product) => (
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
        </main>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedProducts.length / dataPerPage)}
        handlePagination={setCurrentPage}
      />
    </div>
  );
};

export default Products;
