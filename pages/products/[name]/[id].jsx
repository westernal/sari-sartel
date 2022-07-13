import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header/Header";
import ProductDescription from "../../../components/Product/ProductDescription";
import ProductSection from "../../../components/Product/ProductSection";

const Product = () => {
  return (
    <div className="product-page">
      <Head>
        <title>محصولات - ساری سارتل</title>
      </Head>

      <Header />

      <ProductDescription />

      <div className="products-section">
        <ProductSection name="Same Products" />
      </div>

      <Footer />
    </div>
  );
};

export default Product;
