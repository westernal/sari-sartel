import Head from "next/head";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const Header = () => {

    const headerItems = [ "Phones", "Tablets", "Accessories", "Speakers", "Smart watches" ]

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
      <title>Sari Sartel</title>
      <meta name="google-site-verification" content="HRGHGXtwdG3fqZYF59Cf3anXaEa5nWlDFr2VaT2vkSU" />
      <link rel="apple-touch-icon" sizes="57x57" href="/Images/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/Images/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/Images/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/Images/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/Images/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/Images/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/Images/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/Images/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/Images/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192"  href="/Images/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/Images/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/Images/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/Images/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#1e2130" />
    <meta name="msapplication-TileImage" content="/Images/ms-icon-144x144.png" />
    <meta name="theme-color" content="#1e2130"></meta>
        </Head>

            <div className="upper-header">
                <BurgerMenu items={headerItems} />
                <div className="login-search">
                    <button>Login</button>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="header-logo">
                    <Link href={"/"}><a><img src="/Images/WhatsApp Image 2022-03-01 at 1.40.45 PM.jpeg" alt="sari sartel's logo" /></a></Link>
                    <a href="#" onClick={opennav}><img src="/Images/burger-menu.png" alt="burger menu" id="burger-menu"/></a>
                </div>
            </div>

            <div className="down-header">
                { headerItems.map((item, index) => (
                  <Link href={`/products/${item}`}><a key={index}> <div className="header-item"> {item} </div> </a></Link> 
                ))}
            </div>

        </div>
     );
}
 
export default Header;