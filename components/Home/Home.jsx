import Head from "next/head";
import About from "./About";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header/Index";
import ProductSection from "../Product/ProductSection";

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
