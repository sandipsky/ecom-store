import { Product } from "../../models/product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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
                <h4>${product.price}</h4>
            </div>
            <a href="#" className="cart"><i className="fa fal fa-shopping-cart"></i></a>
        </div>
    )
}