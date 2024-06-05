// CheckoutPage.js
import { RootState } from '../../store/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/slice/cartslice';
import { useNavigate } from 'react-router-dom';
import SweetAlert2 from 'react-sweetalert2';

const CheckoutPage = () => {
  const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const [swalProps, setSwalProps] = useState({});

  const navigate = useNavigate();

  const handleSubmit = () => {
    setSwalProps({
      show: true,
      title: 'Success',
      text: 'Thank you for Purchasing',
    });

  };



  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Order Summary</h2>
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className="flex justify-between py-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>Rs. {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between border-t pt-2">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">Rs. {total}</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Payment Details</h2>
            <div>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="expiry" className="block text-gray-700 text-sm font-bold mb-2">Expiry Date:</label>
                <input type="text" id="expiry" name="expiry" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV:</label>
                <input type="text" id="cvv" name="cvv" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <button onClick={() => handleSubmit()} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Place Order</button>

            </div>
          </div>
        </div>
      </div>

      <SweetAlert2 {...swalProps} didClose={() => {
        navigate("/");
        dispatch(clearCart());
      }} />
    </div>
  );
};

export default CheckoutPage;
