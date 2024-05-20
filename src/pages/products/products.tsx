import { toast } from "react-toastify";
import { addItem } from "../../store/slice/cartslice";
import { useDispatch } from "react-redux";
import { ProductsData } from "../../data/products"
import { Product } from "../../models/product";
import ProductCard from "../../components/productcard/productcard";

export default function Products() {

  const dispatch = useDispatch();

  const products: Product[] = ProductsData.filter(item => item.isFeatured == true);


  function onAddToCart(item: any) {
    dispatch(addItem(item));
    toast.success("Added to cart");
  };

  return (
    <>

    <div className="flex">
      <div className="flex flex-col w-1/3">
        <h3>Filter By</h3>
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
