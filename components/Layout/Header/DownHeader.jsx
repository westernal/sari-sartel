import Link from "next/link";
import Image from "next/dist/client/image";
import { useEffect, useState } from "react";
import API from "../../../requests/API";

const DownHeader = () => {
  const [categories, SetCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const option = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      };

      var result = await API(option, `api/product/getCategories`);

      if (result.status == 200) {
        SetCategories(result.data);
      }
    }

    getCategories();
  }, []);
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
            {categories.map((cat) => (
              <Link href={`/products/${cat.name}`} key={cat._id}>
                <a aria-label="cell phones">{cat.name}</a>
              </Link>
            ))}
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
