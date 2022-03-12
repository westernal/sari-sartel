import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductDescription from "../../components/ProductDescription";
import ProductSection from "../../components/ProductSection";

const Product = () => {

    
    return ( 
        <div className="product-page">
            <Header />

            <ProductDescription />

            <div className="products-section">
                <ProductSection name="Same Products" />
            </div>

            <Footer />
        </div>
     );
}
 
export default Product;