import { useState } from "react";
import Link from "next/dist/client/link";

const BurgerMenu = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  function closenav() {
    document.getElementById("myNav").style.width = "0%";
  }

  return (
    <div id="myNav" className="overlay">
      <a href="#" className="closebtn" onClick={closenav} aria-label="close button">
        &times;
      </a>
      <div className="overlay-content">
        <Link href="/">
          <a id="home-tag" aria-label="home"> خانه</a>
        </Link>
        <Link href="/about" >
          <a id="about-tag" aria-label="about us"> درباره ما</a>
        </Link>
        <Link href="/suggestions" >
          <a id="sug-tag" aria-label="suggestions"> نظرات و پیشنهادات</a>
        </Link>
        <Link href="/products/محصولات">
          <a id="prod-tag" aria-label="products"> محصولات</a>
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
