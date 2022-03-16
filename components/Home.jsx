import Head from "next/head"
import { useEffect } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import ProductSection from "./ProductSection";

const Home = () => {
  return (
    <div className="home-page">
      <Head>
        <title>ساری سارتل</title>
      </Head>
      <Header />

      <About />

      <ProductSection />

      <Footer />
    </div>
  );
};

export default Home;
