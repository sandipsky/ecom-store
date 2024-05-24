import { ProductsData } from "../../data/products";
import { Product } from "../../models/product";
import ProductCard from "../../components/productcard/productcard";
import { useState } from "react";
import ReactSlider from "react-slider";
import './products.scss';

export default function Products() {
  const products: Product[] = ProductsData.filter(item => item.isFeatured === true);
  const brands = [...new Set(ProductsData.map(product => product.brand))];
  const categories = [...new Set(ProductsData.map(product => product.category))];

  const [priceRange, setPriceRange] = useState([0, 5000]); // Adjust this based on your product price range

  const handleSliderChange = (newValues: number[]) => {
    setPriceRange(newValues);
  };

  const filteredProducts = products.filter(product => 
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <>
      <div className="flex min-h-[100vh]">
        <div className="flex flex-col w-[30%] px-[80px] border-[1px] border-black">
          <h3>Filter By</h3>

          <h2>Brand</h2>
          {brands.map((brand, index) => (
            <div className="flex gap-[8px]" key={index}>
              <input type="checkbox" />
              <h3>{brand}</h3>
            </div>
          ))}

          <h2>Category</h2>
          {categories.map((category, index) => (
            <div className="flex gap-[8px]" key={index}>
              <input type="checkbox" />
              <h3>{category}</h3>
            </div>
          ))}

          <h2>Price Range</h2>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span>Min:</span>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="ml-2 w-20"
                min="0"
                max={priceRange[1]}
              />
            </div>
            <div className="flex items-center mt-2">
              <span>Max:</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="ml-2 w-20"
                min={priceRange[0]}
                max="500"
              />
            </div>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="track"
              value={priceRange}
              onChange={handleSliderChange}
              pearling
              minDistance={10}
              min={0}
              max={5000}
            />
          </div>
        </div>

        <div className="w-[70%] flex flex-col border-[1px] border-black">
          <div className="flex">
            <input className="w-2/3" type="text" placeholder="Search" />

            <div className="flex w-1/3">
              <label>Sort By:</label>
              <select name="" id="">
                <option selected disabled hidden value="">Select</option>
                <option value="">Name</option>
                <option value="">Price</option>
              </select>
            </div>
          </div>
          <section id="product1" className="section-p1">
            <div className="pro-container">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
