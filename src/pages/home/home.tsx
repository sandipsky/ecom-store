import ProductCard from "../../components/productcard/productcard";
import { ProductsData } from "../../data/products"
import { Product } from "../../models/product";

export default function Home() {

    const featuredProducts: Product[] = ProductsData.filter(item => item.isFeatured == true);
    const newProducts: Product[] = ProductsData.filter(item => item.isFeatured == false);

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
            <section className="h-[90vh] w-full px-[80px] flex  bg-cyan-50">
                <div className="flex justify-center flex-col items-start">
                    <h4>Trade-in-offer</h4>
                    <h2>Super value deals</h2>
                    <h1>On all products</h1>
                    <p>Save more with coupons & upto 70% off! </p>
                    <button>Shop Now</button>
                </div>

               
            </section>
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
            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection new Modern Design</p>
                <div className="pro-container">
                    {featuredProducts.map((product: Product, index: number) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </section>
            {/* featured product */}


            {/* banner */}
            <section id="banner" className="section-m1 ">
                <h4>Repair Service</h4>
                <h2>Up to <span>70% off</span> - All t-Shirts & Accesories</h2>
                <button className="normal">Explore More</button>
            </section>
            {/* banner */}

            {/* new arrivals */}
            <section id="product1" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection new Modern Design</p>
                <div className="pro-container">
                    {newProducts.map((product: Product, index: number) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </section>
            {/* new arrivals */}

            {/* banners */}
            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classNameic dress is on sale at cara</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upcoming season</h2>
                    <span>The best classNameic dress is on sale at cara</span>
                    <button className="white">Collections</button>
                </div>
            </section>

            <section id="banner3">
                <div className="banner-box">
                    <h2>SEASON SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
                <div className="banner-box banner-box2">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring/Summer 2022</h3>
                </div>
                <div className="banner-box banner-box3">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </div>
            </section>
            {/* banners */}

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
