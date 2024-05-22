
import { ProductsData } from "../../data/products"
import { Product } from "../../models/product";
import ProductCard from "../../components/productcard/productcard";
import { useState } from "react";

export default function Products() {
  const products: Product[] = ProductsData.filter(item => item.isFeatured == true);
  const brands = [...new Set(ProductsData.map(product => product.brand))];
  const categories = [...new Set(ProductsData.map(product => product.category))];

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500); // Adjust this based on your product price range

  const handleMinPriceChange = (event: any) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event: any) => {
    setMaxPrice(event.target.value);
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-1/3">
          <h3>Filter By</h3>

          <h2>Brand</h2>

          {brands.map((brand: any, index: number) => (
            <div className="flex">
              <input type="checkbox" />
              <h3 key={index}>{brand}</h3>
            </div>
          ))}

          <h2>Category</h2>

          {categories.map((category: any, index: number) => (
            <div className="flex">
              <input type="checkbox" />
              <h3 key={index}>{category}</h3>
            </div>
          ))}

          <h2>Price Range</h2>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span>Min:</span>
              <input
                type="number"
                value={minPrice}
                onChange={handleMinPriceChange}
                className="ml-2 w-20"
                min="0"
                max={maxPrice}
              />
            </div>
            <div className="flex items-center mt-2">
              <span>Max:</span>
              <input
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="ml-2 w-20"
                min={minPrice}
                max="500" // Adjust this based on your product price range
              />
            </div>
            <input
              type="range"
              min="0"
              max="500"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="mt-2"
            />
            <input
              type="range"
              min="0"
              max="500"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="mt-2"
            />
          </div>

        </div>

        <section id="product1" className="section-p1 w-2/3">
          <div className="pro-container">
            {products.map((product: Product, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

      </div>

    </>
  )
}
