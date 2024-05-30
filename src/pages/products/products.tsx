import { ProductsData } from "../../data/products";
import { Product } from "../../models/product";
import ProductCard from "../../components/productcard/productcard";
import { useState } from "react";
import ReactSlider from "react-slider";
import './products.scss';

export default function Products() {
  const products: Product[] = ProductsData;
  const brands = [...new Set(ProductsData.map(product => product.brand))];
  const categories = [...new Set(ProductsData.map(product => product.category))];

  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const handleSliderChange = (newValues: number[]) => {
    setPriceRange(newValues);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prevSelected =>
      prevSelected.includes(brand) ? prevSelected.filter(b => b !== brand) : [...prevSelected, brand]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prevSelected =>
      prevSelected.includes(category) ? prevSelected.filter(c => c !== category) : [...prevSelected, category]
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = products
    .filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      (searchQuery === "" || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "price") {
        return a.price - b.price;
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex min-h-[100vh] my-[50px]">
        <div className="flex flex-col w-[30%] px-[80px] gap-[8px]">
          <h3 className="font-[800] text-[24px]">Brand</h3>
          {brands.map((brand, index) => (
            <div className="flex gap-[8px]" key={index}>
              <input type="checkbox" onChange={() => handleBrandChange(brand)} />
              <h3>{brand}</h3>
            </div>
          ))}

          <h3 className="font-[800] text-[24px]">Category</h3>
          {categories.map((category, index) => (
            <div className="flex gap-[8px]" key={index}>
              <input type="checkbox" onChange={() => handleCategoryChange(category)} />
              <h3>{category}</h3>
            </div>
          ))}

          <h3 className="font-[800] text-[24px]">Price Range</h3>
          <div className="flex flex-col">
            <div className="flex items-center gap-[12px]">
              <span>Min:</span>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                min="0"
                max={priceRange[1]}
              />
            </div>
            <div className="flex items-center mt-2 gap-[12px]">
              <span>Max:</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                min={priceRange[0]}
                max="5000"
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

        <div className="w-[70%] flex flex-col">
          <div className="flex items-center gap-[24px]">
            <input
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />

            <div className="flex w-1/3 items-center gap-[12px]">
              <label>Sort By:</label>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={handleSortChange}>
                <option selected disabled hidden value="">Select</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-[12px]">
            {displayedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
