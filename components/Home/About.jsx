import PWAModal from "../Layout/PWAModal";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const About = () => {
  function openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "grid";
  }

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
    <>
      <div className="about">
        <PWAModal />
        <div className="about-description">
          <h1>ساری سارتل</h1>
          <h3>مرکز فروش و خدمات مجاز گوشی های همراه </h3>
          <button id="app-btn" onClick={openModal}>
            دانلود اپ
          </button>
          <a href="https://goo.gl/maps/gau94booSoe9dDGB9">
            <div className="location flex">
              <Image
                src="/Images/icons8-location-50.png"
                alt="location"
                width={30}
                height={30}
              />
              <p>ساری _خیابان شهابی _خیابان المهدی</p>
            </div>
          </a>
        </div>
        <div className="about-image">
          <Image
            src="/Images/hero--iphone12-removebg-preview.jpg"
            alt="iphone 12"
            width={432}
            height={400}
          />
        </div>
      </div>

      <div className="about-section">
        <div className="reveal">
          <h2>درباره ما</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <Link href="/about">
            <a aria-label="more">
              <button>بیشتر بدانید</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
