import UserInfo from "../../../components/User/UserInfo";
import Footer from "../../../components/Layout/Footer";
import Header from "../../../components/Layout/Header";
import Head from "next/head"
import AdminPanel from "../../../components/User/AdminPanel";
import OrderList from "../../../components/User/OrderList";

const Admin = () => {
  return (
    <div className="admin-page">
      <Head>
        <title>پروفایل کاربری - ساری سارتل</title>
      </Head>

      <Header />

      <UserInfo />

      <AdminPanel />

      <OrderList />

      <Footer />
    </div>
  );
};

export default Admin;
