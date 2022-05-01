import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Head from "next/head";
import UserInfo from "../../components/User/UserInfo";
import OrderList from "../../components/User/OrderList";

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
