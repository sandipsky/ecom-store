// components/Cart.js
import { useSelector, useDispatch } from 'react-redux';
import { addItem, decreaseQty, removeItem, clearCart } from '../../store/slice/cartslice';
import { CartItem } from '../../models/cart';
import { RootState } from '../../store/store';

const Cart = () => {
    const items = useSelector((state: RootState) => state.cartReducer.cartItems);
    const dispatch = useDispatch();

    const handleIncrease = (item: CartItem) => {
        dispatch(addItem(item));
    };

    const handleDecrease = (item: CartItem) => {
        dispatch(decreaseQty(item));
    };

    const handleRemoveItem = (item: CartItem) => {
        dispatch(removeItem(item));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalPrice = items.reduce((total: number, item: CartItem) => total + item.quantity * item.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {items.map((item: CartItem) => (
                        <li key={item.id}>
                            Name: {item.name} - Price: ${item.price} Qty: ${item.quantity} Total: ${item.price * item.quantity}
                            <button onClick={() => handleIncrease(item)}>Increase Qty</button>
                            <button onClick={() => handleDecrease(item)}>Decrease Qty</button>
                            <button onClick={() => handleRemoveItem(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${totalPrice}</p>
            <button onClick={handleClearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
