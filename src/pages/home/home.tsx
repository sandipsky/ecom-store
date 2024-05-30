import Featured from "../../components/featured/featured";
import { ProductsData } from "../../data/products"
import { Product } from "../../models/product";
// import '../../components/featured/featured.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

    const featuredProducts: Product[] = ProductsData.filter(item => item.isFeatured == true);
    const newProducts: Product[] = ProductsData.filter(item => item.isFeatured == false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const features = [
        {
            image: "img/features/f1.png",
            name: "Free Shipping",
        },
        {
            image: "img/features/f2.png",
            name: "Online Order",
        },
        {
            image: "img/features/f3.png",
            name: "Save Money",
        },
        {
            image: "img/features/f4.png",
            name: "Promotions",
        },
        {
            image: "img/features/f5.png",
            name: "Happy Sell",
        },
        {
            image: "img/features/f6.png",
            name: "Support",
        }
    ];

    return (
        <>
            {/* hero section  */}
            <Slider {...settings}>
                <div id="hero1" className="h-[90vh] flex items-center bg-cyan-50 ml-[-80px]">
                    <div className="w-1/2 flex justify-center flex-col items-center h-full px-[80px]">
                        <h4>Trade-in-offer</h4>
                        <h2>Super value deals</h2>
                        <h1>On all products</h1>
                        <p>Save more with coupons & upto 70% off! </p>
                        <button>Shop Now</button>
                    </div>
                </div>

                <div id="hero2" className="h-[90vh] flex items-center bg-cyan-50 ml-[-80px]">
                    <div className="w-1/2 flex justify-center flex-col items-center h-full px-[80px]">
                        <h4>Trade-in-offer</h4>
                        <h2>Super value deals</h2>
                        <h1>On all products</h1>
                        <p>Save more with coupons & upto 70% off! </p>
                        <button>Shop Now</button>
                    </div>
                </div>

                <div id="hero3" className="h-[90vh] flex items-center bg-cyan-50 ml-[-80px]">
                    <div className="w-1/2 flex justify-center flex-col items-center h-full px-[80px]">
                        <h4>Trade-in-offer</h4>
                        <h2>Super value deals</h2>
                        <h1>On all products</h1>
                        <p>Save more with coupons & upto 70% off! </p>
                        <button>Shop Now</button>
                    </div>
                </div>





            </Slider>
            {/* hero section  */}

            {/* features  */}
            <section className="flex flex-wrap items-center justify-between px-[80px] py-[40px]">
                {features.map((feature, index) => (
                    <div key={index} className="w-[180px] text-center px-[15px] py-[25px] my-[15px]">
                        <img className="w-full mb-[10px]" src={feature.image} alt={feature.name} />
                        <h6 className="bg-[#fddde4] rounded-[4px] text-[#088178] px-[8px] py-[9px]">{feature.name}</h6>
                    </div>
                ))}
            </section>
            {/* features */}

            {/* featured product */}
            <Featured products={featuredProducts} name={'Featured Products'} />
            {/* featured product */}

            {/* banner */}
            <section className="my-[30px] flex flex-col justify-center items-center bg-[#060f1e] w-full h-[40vh]">
                <h4 className="text-white text-[16px]">Repair Service</h4>
                <h2 className="text-white text-[30px] py-[10px]">Up to <span>70% off</span> - All t-Shirts & Accesories</h2>
                <button className="normal">Explore More</button>
            </section>
            {/* banner */}

            {/* new arrivals */}
            <Featured products={newProducts} name={'New Arrivals'} />
            {/* new arrivals */}


            {/* newsletter */}
            <section id="newsletter" className="section-p1 section-m1 ">
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span>
                    </p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your email address" />
                    <button className="normal">Sign Up</button>
                </div>
            </section>
            {/* newsletter */}
        </>

    )
}
