import Head from "next/head";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import Image from "next/dist/client/image";

const Header = () => {

    const headerItems = [  " نظرات و پیشنهادات", " محصولات",
 ]

    function opennav(e) {
        e.preventDefault();
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("myNav").style.height = "100%";
      }


    return ( 
        
        <div className="header">

<Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <meta name='description' content='Description' />
      <meta name='keywords' content='Keywords' />
      <title>ساری سارتل</title>
   
        </Head>

            <div className="upper-header">
                <BurgerMenu items={headerItems} />
                <div className="login-search">
                    <Link href="/user/login"><a><button>ورود</button></a></Link>
                    <input type="text" placeholder="جستجو..." />
                </div>
                <div className="header-logo">
                    <Link href={"/"}><a><Image src="/Images/WhatsApp Image 2022-03-01 at 1.40.45 PM.jpeg" alt="sari sartel's logo" width={60} height={60} /></a></Link>
                    <a href="#" onClick={opennav}><Image src="/Images/burger-menu.png" alt="burger menu" id="burger-menu" width={40} height={40}/></a>
                </div>
            </div>

            <div className="down-header">
                <Link href={`/`} ><a > <div className="header-item" id="about-h"> خانه </div> </a></Link>
                <Link href={`/about`} ><a > <div className="header-item" id="about-h"> درباره ما </div> </a></Link> 
                { headerItems.map((item, index) => (
                  <Link href={`/products`} key={index}><a > <div className="header-item"> {item} </div> </a></Link> 
                ))}
            </div>

        </div>
     );
}
 
export default Header;