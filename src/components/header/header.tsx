import { useSelector } from "react-redux";
import { CartItem } from "../../models/cart";
import { RootState } from "../../store/store";
import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../../auth/authcontext";
import { useState } from "react";
import Cart from "../cart/cart";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);
  const cartCount = cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0);
  const { logout, user, isLoggedIn } = useAuth();

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-[80px] py-[12px]">
        <h1 className="font-[900] text-[28px]">Estore</h1>
        <ul className="flex items-center gap-[16px]" id="navbar">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/">Home</NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/products">Products</NavLink>
          </li>

          {isLoggedIn() ? (
            <>
              <li>
                <span>{user?.username}</span>
              </li>

              <li>
                <a onClick={() => logout()}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/register">Register</NavLink>
              </li>

              <li>
                <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/login">Login</NavLink>
              </li>
            </>
          )}

          <li onClick={() => setCartOpen(true)}>
            {/* <Link to="/cart">
              {cartCount} Cart
            </Link> */}
            {cartCount} Cart
          </li>
        </ul>

        <Cart cartOpen={cartOpen} toggleCart={setCartOpen} />

      </header>
    </>

  )
}
