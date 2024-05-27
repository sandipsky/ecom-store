// src/components/ProductDetail/ProductDetail.js
import { useParams } from 'react-router-dom';
import { ProductsData } from '../../../data/products';
import { Product } from '../../../models/product';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/slice/cartslice';
import { toast } from 'react-toastify';

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const product = ProductsData.find((item: Product) => item.id == id);


    const dispatch = useDispatch();

    function onAddToCart(item: Product) {
        dispatch(addItem(item));
        toast.success("Added to cart");
    }

    if (!product) {
        return <div className="text-center mt-10 text-gray-600">Product not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-8 flex">
            <img src={`${product.image}`} alt={product.name} className="w-1/2 rounded-lg shadow-md" />
            <div className="ml-8">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <h2 className="mt-2 text-lg text-gray-700">${product.price}</h2>
                {/* <p className="mt-4 text-gray-800">{product.description}</p> */}
                <button onClick={() => onAddToCart(product)} className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
