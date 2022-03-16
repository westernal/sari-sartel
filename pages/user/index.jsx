import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/dist/client/image";
import Head from "next/head";
import UserInfo from "../../components/UserInfo";
import OrderList from "../../components/OrderList";

const User = () => {
  return (
    <div className="user">
      <Head>
        <title>پروفایل کاربری - ساری سارتل</title>
      </Head>

      <Header />

      <UserInfo />

      <OrderList />

      <Footer />
      </div>
  );
};

export default User;
