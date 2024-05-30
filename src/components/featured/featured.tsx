import { Product } from "../../models/product";
import ProductCard from "../productcard/productcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './featured.scss'

interface FeaturedProps {
    products: Product[];
    name: string;
}

export default function Featured({ products, name }: FeaturedProps) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section>
            <h2 className="text-center">{name}</h2>

            <Slider {...settings}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </Slider>

        </section>
    );
}
