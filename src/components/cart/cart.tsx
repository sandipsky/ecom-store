// components/Cart.js
import { useSelector, useDispatch } from 'react-redux';
import { addItem, decreaseQty, removeItem, clearCart } from '../../store/slice/cartslice';
import { CartItem } from '../../models/cart';
import { RootState } from '../../store/store';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
        <div ref={cartRef} className={`fixed top-0 right-0 h-full z-50 bg-white shadow-lg transition-transform transform ${props.cartOpen ? 'translate-x-0' : 'translate-x-full'} w-[400px]`}>
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <button onClick={() => props.toggleCart(false)} className="text-xl">
                    <i className="bx bx-x"></i>

                </button>
            </div>
            {items.length === 0 ? (
                <p className="p-4">Your cart is empty</p>
            ) : (
                <ul className="p-4 space-y-4 overflow-y-auto">
                    {items.map((item: CartItem) => (
                        <li key={item.id} className="flex items-center justify-between border-b pb-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1 ml-4">
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-sm text-gray-500">Price: Rs. {item.price}</p>
                                <div className="flex items-center mt-2">
                                    <button onClick={() => handleDecrease(item)} className="text-gray-500 hover:text-black mr-2">
                                        <i className="bx bx-minus"></i>
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrease(item)} className="text-gray-500 hover:text-black ml-2">
                                        <i className="bx bx-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <p className="font-semibold">Rs. {item.price * item.quantity}</p>
                                <button onClick={() => handleRemoveItem(item)} className="text-gray-500 hover:text-red-600">
                                    <i className="bx bx-trash"></i>

                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {items.length > 0 && (
                <div className="p-4 border-t">
                    <p className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>Rs. {totalPrice}</span>
                    </p>
                    <button onClick={handleClearCart} className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                        Clear Cart
                    </button>
                    <Link to={"/checkout"}>
                        <button onClick={() => props.toggleCart(false)} className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                            Checkout
                        </button>
                    </Link>

                </div>
            )}
        </div>
    );
};


