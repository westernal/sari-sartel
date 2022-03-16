import Header from "../../../components/Header";
import UserInfo from "../../../components/UserInfo";
import Footer from "../../../components/Footer";
import Head from "next/head"
import AdminPanel from "../../../components/AdminPanel";
import OrderList from "../../../components/OrderList";

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
