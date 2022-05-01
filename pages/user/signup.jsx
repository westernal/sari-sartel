import Link from "next/link";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header/Index";
import { GoogleLogin } from "react-google-login";
import Image from "next/dist/client/image";
import Head from "next/head";
import { toast } from "react-toastify";

const SignUp = () => {
  function googleSucceeded(res) {}

  async function signUp(email, password) {
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      redirect: "follow",
    };

    var result = await API(option, "api/users/signup");

    if (result.status == 201) {
      localStorage.setItem("token", result.data.token);
      router.push("/");
      toast.success("با موفقيت وارد شديد!");
    }
  }

  function checkInputs(e) {
    e.preventDefault();

    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeat-password");
    const email = document.getElementById("email");

    if (email.value == "") {
      toast.error("ایمیلی وارد نشد");
    }

    if (password.value < 6) {
      toast.error("کلمه عبور باید حداقل 6 کاراکتر باشد");
    } else if (password.value !== repeatPassword.value) {
      toast.error("تکرار کلمه عبور با کلمه عبور یکی نیست");
    } else logIn(email.value, password.value);
  }

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
            <input type="text" placeholder="ایمیل" id="email" />
            <input type="password" placeholder="رمز عبور" id="password" />
            <input
              type="password"
              placeholder="تکرار رمزعبور "
              id="repeat-password"
            />
            <div className="flex">
              <input
                type="submit"
                value="ثبت نام"
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
