import { useSelector } from "react-redux";
import { CartItem } from "../../models/cart";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);
  const cartCount = cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0);

  return (
    <>
      <div>header </div>

      <Link to="/cart">
        {cartCount} Cart
      </Link>
    </>

  )
}
