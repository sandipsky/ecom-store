import { toast } from "react-toastify";
import { addItem } from "../../store/slice/cartslice";
import { useDispatch } from "react-redux";

export default function Products() {

  const dispatch = useDispatch();

  const products = [{ id: 1, name: "amlod", price: 300 }, { id: 2, name: "toothbrush", price: 500 },]

  function onAddToCart(item: any) {
    dispatch(addItem(item));
    toast.success("Added to cart");
  };

  return (
    <>
      <div>product</div>

      {products.map((item: any) => (
        <li key={item.id}>
          {item.name} ${item.price}
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </li>
      ))}

      
    </>
  )
}
