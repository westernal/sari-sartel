import Link from "next/link";
import Image from "next/dist/client/image";
import ContentLoader from "react-content-loader";
import { useState } from "react";
import { useEffect } from "react";

const ItemList = () => {
  const items = ["", "", "", ""];
  const colors = ["white", "black", "red", "blue"];
  const [loader, SetLoader] = useState(true);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    SetLoader(true);
    async function postLoader(params) {
      await sleep(3000);
      SetLoader(false);
    }

    postLoader();
  }, []);

  return (
    <div className="items-list reveal">
      {items.map((item, index) => (
        <Link
          href={`/products/[name]/[id]`}
          as={`/products/iphone/1`}
          key={index}
        >
          <a aria-label="product">
            <div className="item">
              {loader ? (
                <ContentLoader
                  speed={2}
                  width={300}
                  height={500}
                  viewBox="0 0 300 500"
                  backgroundColor="#dedede"
                  foregroundColor="#ffffff"
                  style={{ width: "100%" }}
                >
                  <rect x="72" y="441" rx="2" ry="2" width="140" height="10" />
                  <rect x="72" y="284" rx="2" ry="2" width="140" height="10" />
                  <rect x="0" y="-150" rx="2" ry="2" width="400" height="400" />
                  <circle cx="72" cy="341" r="12" />
                  <circle cx="117" cy="341" r="12" />
                  <circle cx="167" cy="341" r="12" />
                  <circle cx="216" cy="342" r="12" />
                  <rect x="72" y="377" rx="0" ry="0" width="140" height="37" />
                </ContentLoader>
              ) : (
                <div>
                  <div className="item-img">
                    <Image
                      src="/Images/61l9ppRIiqL._SL1500_.jpg"
                      alt="iphone 13"
                      id="item-image"
                      width={400}
                      height={400}
                    />
                  </div>
                  <h2>iPhone 13</h2>
                  <div className="item-colors flex">
                    {colors.map((item, index) => (
                      <div
                        className="color"
                        key={index}
                        style={{ backgroundColor: item }}
                      ></div>
                    ))}
                  </div>
                  <div className="item-capacity">
                    <select name="capacity" id="capacity-select">
                      <option value="64">64 GB</option>
                      <option value="128">128 GB</option>
                    </select>
                  </div>
                  <div className="price">32,000,000 تومان</div>
                </div>
              )}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
