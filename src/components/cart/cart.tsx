// components/Cart.js
import { useSelector, useDispatch } from 'react-redux';
import { addItem, decreaseQty, removeItem, clearCart } from '../../store/slice/cartslice';
import { CartItem } from '../../models/cart';
import { RootState } from '../../store/store';
import { useEffect, useRef } from 'react';

interface CartProps {
    cartOpen: boolean;
    toggleCart: any
}

export default function Cart(props: CartProps) {
    const items = useSelector((state: RootState) => state.cartReducer.cartItems);
    const dispatch = useDispatch();
    const cartRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                props.toggleCart(false);
            }
        };

        if (props.cartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [props.cartOpen, props.toggleCart]);

    return (
        <div className={`h-[100%] fixed right-0 z-[10] top-0 bg-gray-200 transition-all duration-300 ${props.cartOpen == true ? 'w-[500px]' : 'w-[0px]'}`}>
            <span onClick={() => props.toggleCart(false)}>Cross</span>
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


