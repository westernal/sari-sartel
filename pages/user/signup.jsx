import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { GoogleLogin } from "react-google-login";
import Image from "next/dist/client/image";
import Head from "next/head";

const SignUp = () => {
  function googleSucceeded(res) {}

  return (
    <>
      <Head>
        <title>ثبت نام - ساری سارتل</title>
      </Head>
      <Header />
      <div className="login-page flex">
        <div className="login-form">
          <div className="flex slogo">
            <Image
              src="/Images/logo-removebg-preview.png"
              alt="sari sartel's logo"
              width={108}
              height={40}
            />
          </div>
          <form action="#">
            <input type="text" placeholder="ایمیل" />
            <input type="password" placeholder="رمز عبور" />
            <input type="password" placeholder="تکرار رمزعبور " />
            <div className="flex">
              <input type="submit" value="ثبت نام" id="submit-btn" />
            </div>
          </form>
          <div className="flex">
            <p>OR</p>
          </div>
          <div className="flex g-btn">
            <GoogleLogin
              clientId="155548980934-3ufu90sfd6rm1v4mcjogcseproqp9upn.apps.googleusercontent.com"
              buttonText="ثبت نام با گوگل"
              onSuccess={googleSucceeded}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="flex">
            <p>اکانت دارید؟</p>
            <Link href="/user/login">
              <a aria-label="login">ورود</a>
            </Link>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
