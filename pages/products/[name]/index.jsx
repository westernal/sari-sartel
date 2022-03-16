import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ItemList from "../../../components/ItemList";
import Head from "next/head";

const Products = () => {
  const route = useRouter();

  useEffect(() => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function pageAnimation() {
      const reveal = document.getElementsByClassName("reveal")[0];
      reveal.classList.remove("active");
      await sleep(500);
      reveal.classList.add("active");
    }

    pageAnimation();
  }, [route.query.name]);

  return (
    <div className={`products-page`}>
      <Head>
        <title>محصولات - ساری سارتل</title>
      </Head>
      <Header />
      <div className="main-title">
        <h1>{route.query.name}</h1>
        <div className="order-by">
          <select name="order" id="order-select">
            <option value="new">جدیدترین</option>
            <option value="highest price">بالاترین قیمت </option>
            <option value="lowest price"> پایین ترین قیمت </option>
          </select>
        </div>
      </div>
      <ItemList />

      <Footer />
    </div>
  );
};

export default Products;
