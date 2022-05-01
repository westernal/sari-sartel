import Link from "next/link";
import Image from "next/dist/client/image";

const DownHeader = () => {
  return (
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
            <Link href={"/products/تلفن همراه"}>
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
  );
};

export default DownHeader;
