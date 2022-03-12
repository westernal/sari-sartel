import Link from "next/link"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { GoogleLogin } from 'react-google-login';
import Image from "next/dist/client/image";

const SignUp = () => {

    
    function googleSucceeded(res) {
        
    }



    return ( 
      <>
      <Header />
        <div className="login-page flex">
            <div className="login-form">
                <div className="flex slogo"><Image src="/Images/WhatsApp Image 2022-03-01 at 1.40.45 PM.jpeg" alt="logo" width={70} height={70} /></div>
                <form action="#">
                    <input type="text" placeholder="ایمیل" />
                    <input type="password" placeholder="رمز عبور" />
                    <input type="password" placeholder="تکرار رمزعبور " />
                    <div className="flex"><input type="submit" value="ثبت نام" id="submit-btn"/></div>
                </form>
                <div className="flex"><p>OR</p></div>
                <div className="flex g-btn"><GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="ثبت نام با گوگل"
                    onSuccess={googleSucceeded}
                    cookiePolicy={'single_host_origin'}
                /></div>
                <div className="flex"><p>اکانت دارید؟</p><Link href="/user/login"><a>ورود</a></Link>  </div>
            </div>
        </div>
       <Footer /> 
      </>
     );
}
 
export default SignUp;