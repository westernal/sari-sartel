import Image from "next/dist/client/image";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <div className="product-bck">
        <Image
          src="/Images/background-shapes-01alt-14-41-42-627.png"
          alt="background image"
          id="product-background"
          width={1800}
          height={700}
        />
      </div>

      <div className="product-info">
        <div className="product-image">
          <Image
            src="/Images/61l9ppRIiqL._SL1500_.jpg"
            alt="product"
            width={300}
            height={300}
          />
        </div>

        <div className="product-text">
          <h1>iPhone 13</h1>
          <div className="info">
            <h4>درباره محصول:</h4>
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
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="info">
            <h4>ظرفیت:</h4>
            <div className="item-capacity">
              <select name="capacity" id="capacity-select">
                <option value="64">64 GB</option>
                <option value="128">128 GB</option>
              </select>
            </div>
          </div>
          <div className="info">
            <h4>رنگ:</h4>
            <div className="item-color">
              <select name="color" id="color-select">
                <option value="black">Black</option>
                <option value="white">White</option>
              </select>
            </div>
          </div>
          <div className="info">
            <h4>قیمت:</h4>
            <p id="price">32,000,000 تومان</p>
          </div>
          <div className="buy-btn flex">
            <button> اضافه کردن به سبد خرید </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
