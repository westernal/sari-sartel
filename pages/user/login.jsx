import Link from "next/link";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header/Header";
import { GoogleLogin } from "react-google-login";
import Image from "next/dist/client/image";
import Head from "next/head";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import API from "../../requests/API";
import { Bars } from "react-loader-spinner";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [loader, SetLoader] = useState(false);

  function googleSucceeded(res) {}

  async function logIn(email, password) {
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      redirect: "follow",
    };

    try {
      var result = await API(option, "api/user/login");
    } catch (error) {
      toast.error("خطای سرور!");
    }

    if (result.status == 200) {
      localStorage.setItem("token", result.data.token);
      SetLoader(false);
      router.push("/");
      toast.success("با موفقيت وارد شديد!");
    } else {
      toast.error(`${result.data.message}`);
      SetLoader(false);
    }
  }

  function checkInputs(e) {
    SetLoader(true);
    e.preventDefault();

    const password = document.getElementById("password");
    const email = document.getElementById("email");

    if (email.value == "") {
      toast.error("ایمیلی وارد نشد");
    }

    if (password.value < 6) {
      toast.error("کلمه عبور اشتباه است");
    } else logIn(email.value, password.value);
  }

  return (
    <>
      <Head>
        <title>ورود - ساری سارتل</title>
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
          {loader && (
            <div className="flex loader">
              {" "}
              <Bars color="#212121" height={30} width={30} />
            </div>
          )}
          <form action="#">
            <input type="text" placeholder="ایمیل" id="email" />
            <input type="password" placeholder="رمز عبور" id="password" />
            <div className="flex">
              <input
                type="submit"
                value="ورود"
                id="submit-btn"
                onClick={checkInputs}
              />
            </div>
          </form>
          <div className="flex">
            <p>یا</p>
          </div>
          <div className="flex g-btn">
            <GoogleLogin
              clientId="155548980934-3ufu90sfd6rm1v4mcjogcseproqp9upn.apps.googleusercontent.com"
              buttonText="ورود با گوگل"
              onSuccess={googleSucceeded}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="flex">
            <p>اکانت ندارید؟ </p>
            <Link href="/user/signup">
              <a aria-label="sign up">ثبت نام</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
