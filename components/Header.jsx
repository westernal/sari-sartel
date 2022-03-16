import Head from "next/head";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import Image from "next/dist/client/image";

const Header = () => {
  function opennav(e) {
    e.preventDefault();
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
  }

  return (
    <div className="header">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta
          name="description"
          content="مرکز فروش و خدمات مجاز گوشی های همراه
(iPhone, Huawei, Nokia, Samsung)"
        />
        <meta name="keywords" content="Keywords" />
      </Head>

      <div className="upper-header">
        <BurgerMenu />
        <div className="login-search">
          <Link href="/user/login">
            <a aria-label="login">
              <button>ورود</button>
            </a>
          </Link>
          <input type="text" placeholder="جستجو..." />
        </div>
        <div className="header-logo">
          <Link href={"/"}>
            <a aria-label="home">
              <Image
                src="/Images/WhatsApp Image 2022-03-01 at 1.40.45 PM.jpeg"
                alt="sari sartel's logo"
                width={90}
                height={60}
              />
            </a>
          </Link>
          <a href="#" onClick={opennav} aria-label="open navigation">
            <Image
              src="/Images/burger-menu.png"
              alt="burger menu"
              id="burger-menu"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>

      <div className="down-header">
        <Link href={`/`}>
          <a aria-label="home">
            <div className="header-item" id="home-h">
              خانه
            </div>
          </a>
        </Link>
        <div className="dropdown-prod">
          <Link href={`/products/محصولات`}>
            <a aria-label="products">
              <div className="header-item" id="prod-h">
                محصولات
                <Image
                  src={"/Images/icons8-sort-down-24.png"}
                  width={24}
                  height={24}
                  alt="down button"
                />
              </div>
            </a>
          </Link>
          <div className="dropdown">
            <div className="dropdown-content">
              <Link href={"/products/تلفن همراه"} >
                <a aria-label="cell phones">تلفن همراه</a>
              </Link>
              <Link href={"/products/تبلت"}>
                <a aria-label="tablet">تبلت</a>
              </Link>
              <Link href={"/products/ساعت هوشمند"}>
                <a aria-label="smart watches">ساعت هوشمند</a>
              </Link>
              <Link href={"/products/لوازم جانبی"}>
                <a aria-label="accessories">لوازم جانبی</a>
              </Link>
            </div>
            <div className="dropdown-content2">
              <Link href={"/products/اپل"}>
                <a aria-label="apple">اپل</a>
              </Link>
              <Link href={"/products/سامسونگ"}>
                <a aria-label="samsung">سامسونگ</a>
              </Link>
              <Link href={"/products/هواوی"}>
                <a aria-label="huawei">هواوی</a>
              </Link>
              <Link href={"/products/شیائومی"}>
                <a aria-label="xiaomi"> شیائومی</a>
              </Link>
            </div>
          </div>
        </div>
        <Link href={`/about`}>
          <a aria-label="about-us">
            <div className="header-item" id="about-h">
              درباره ما
            </div>
          </a>
        </Link>
        <Link href={`/suggestions`}>
          <a aria-label="suggestions">
            <div className="header-item" id="sug-h">
              نظرات و پیشنهادات
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
