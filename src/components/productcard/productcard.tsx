import { Link } from "react-router-dom";
import { Product } from "../../models/product";
import { addItem } from "../../store/slice/cartslice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

    const dispatch = useDispatch();

    function onAddToCart(item: any) {
        dispatch(addItem(item));
        toast.success("Added to cart");
    };

    return (
        <div className="px-[12px] py-[10px] shadow-md w-[320px] my-[15px] border-[1px] rounded-[6px] border-[#f2f2f2]">
            <Link to={`/products/${product.id}`}> <img src={product.image} alt={product.name} /></Link>
            <span>{product.brand}</span>
            <Link to={`/products/${product.id}`}><h5>{product.name}</h5></Link>
            <div className="flex items-center justify-between mt-2">
                <h4 className="font-[700] text-[#088178]">Rs. {product.price}</h4>
                <button onClick={() => onAddToCart(product)} className="bg-[#fddde4] rounded-[4px] text-[#088178] p-[10px] text-[14px]">
                    <i className="bx bx-cart-alt"></i> Add to Cart
                </button>
            </div>
        </div>
    );
}
