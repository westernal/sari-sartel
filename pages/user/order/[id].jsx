import Head from "next/head";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header/Header";

const OrderInfo = () => {
  return (
    <div className="order-info">
      <Header />

      <Head>
        <title>سفارش - ساری سارتل</title>
      </Head>

      <div className="user-profile flex">
        <div className="user-info">
          <div className="user-text">
            <div className="info">
              <h4>نام:</h4>
              <p>Ali Navidi</p>
            </div>
            <div className="info">
              <h4>ایمیل:</h4>
              <p>ali_navidi24@yahoo.com</p>
            </div>
            <div className="info">
              <h4>شماره تماس:</h4>
              <p>09339668289</p>
            </div>
            <div className="info">
              <h4> تاریخ ورود:</h4>
              <p>3/4/2022</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderInfo;
