import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import Image from "next/dist/client/image";
import { useState } from "react";
import { useEffect } from "react";

const UpperHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  function opennav(e) {
    e.preventDefault();
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
  }

  return (
    <div className="upper-header">
      <BurgerMenu />
      <div className="login-search">
        {!isLoggedIn && (
          <Link href="/user/login">
            <a aria-label="login">
              <button>ورود</button>
            </a>
          </Link>
        )}
        <input type="text" placeholder="جستجو..." />
      </div>
      <div className="header-logo">
        <Link href={"/"}>
          <a aria-label="home">
            <Image
              src="/Images/logo-removebg-preview.png"
              alt="sari sartel's logo"
              width={108}
              height={40}
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
  );
};

export default UpperHeader;
