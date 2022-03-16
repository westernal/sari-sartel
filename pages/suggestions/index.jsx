import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Head from "next/head";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <Head>
        <title>نظرات و پیشنهادات - ساری سارتل</title>
      </Head>
      <Header />
      <h1>نظرات و پیشنهادات</h1>
      <p>نظرات و پیشنهادات خود را با ما در میان بگذارید</p>
      <div className="login-page flex">
        <div className="login-form">
          <div className="flex slogo">
            <Image
              src="/Images/WhatsApp Image 2022-03-01 at 1.40.45 PM.jpeg"
              alt="logo"
              width={70}
              height={70}
            />
          </div>
          <form action="#">
            <textarea placeholder="نظر خود را بنویسید..." />
            <div className="flex">
              <input type="submit" value="ثبت نظر" id="submit-btn" />
            </div>
          </form>
          <div className="flex">
            <p> یا</p>
          </div>
          <div className="socials flex">
            <a href="https://www.instagram.com/sarisartel2/" aria-label="instagram page">
              <Image
                src="/Images/icons8-instagram-30.png"
                alt="instagram logo"
                width={35}
                height={35}
              />
            </a>
            <a href="tel:01133201111" aria-label="call number">
              <Image
                src="/Images/icons8-ringer-volume-50.png"
                alt="telephone" 
                id="telephone"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Suggestions;
