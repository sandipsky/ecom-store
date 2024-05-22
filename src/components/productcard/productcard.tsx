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
        <div className="pro">
            <img src={product.image} alt={product.name} />
            <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div className="flex items-center justify-between">
                    <h4>${product.price}</h4>
                    <button onClick={() => onAddToCart(product)} className="bg-[#fddde4] rounded-[4px] text-[#088178] p-[10px] text-[14px]"><i className="fa fal fa-shopping-cart"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    )
}