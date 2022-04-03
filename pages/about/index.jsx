import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Image from "next/dist/client/image";
import Head from "next/head";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Head>
        <title>درباره ما - ساری سارتل</title>
      </Head>
      <Header />

      <div className="main-title">
        <h1>درباره ما</h1>
      </div>

      <div className="flex">
        <div className="about-form">
          <div className="about-info">
            <div className="flex">
              <Image
                src="/Images/imgonline-com-ua-ReplaceColor-NPlCJjd7GepfKE5-removebg-preview.png"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <a
              href="https://goo.gl/maps/gau94booSoe9dDGB9"
              aria-label="location"
            >
              <div className="location flex">
                <Image
                  src="/Images/icons8-location-50.png"
                  alt="location"
                  width={30}
                  height={30}
                />
                <h4>ساری _خیابان شهابی _خیابان المهدی</h4>
              </div>
            </a>
            <a
              href="tel:01133201111"
              className="flex"
              aria-label="telephone number"
            >
              <Image
                src="/Images/icons8-ringer-volume-50.png"
                alt="telephone"
                id="telephone"
                width={30}
                height={30}
              />
              <h4>011-33201111</h4>
            </a>
          </div>
          <div className="about-text">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.رد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
