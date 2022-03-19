import Image from "next/image";
import Link from "next/dist/client/link";
import { useEffect } from "react";

const ProductSection = () => {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
  }, []);
  return (
    <div className="product-section">
      <div className="reveal">
        <Link href={"/products/تلفن همراه"}>
          <a aria-label="cell phones">
            <div className="about-product">
              <h2>تلفن همراه</h2>
              <Image
                src="/Images/PDP-O1-Pink-lockup-01-1600x1200.webp"
                alt="mobile phones"
                width={400}
                height={400}
              />
            </div>
          </a>
        </Link>
        <Link href={"/products/تبلت"}>
          <a aria-label="tablets">
            <div className="about-product">
              <h2>تبلت</h2>
              <Image
                src="/Images/112-1121666_broken-tablets-by-apple-google-and-samsung-needing-removebg-preview (1).jpg"
                alt="tablets"
                width={400}
                height={400}
              />
            </div>
          </a>
        </Link>
        <Link href={"/products/ساعت هوشمند"}>
          <a aria-label="smart watches">
            <div className="about-product">
              <h2>ساعت هوشمند</h2>
              <Image
                src="/Images/193-1939793_most-popular-smartwatches-samsung-galaxy-watch-hd-png.jpg"
                alt="smart watches"
                width={530}
                height={400}
              />
            </div>
          </a>
        </Link>
        <Link href={"/products/ لوازم جانبی"}>
          <a aria-label="accessories">
            {" "}
            <div className="about-product">
              <h2>لوازم جانبی</h2>
              <Image
                src="/Images/117136-images-airpods-png-file-hd.png"
                alt="accessories"
                width={400}
                height={400}
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
