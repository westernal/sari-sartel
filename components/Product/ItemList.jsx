import Link from "next/link";
import Image from "next/dist/client/image";
import ContentLoader from "react-content-loader";
import { useState } from "react";
import { useEffect } from "react";

const ItemList = () => {
  const items = ["", "", "", ""];
  const colors = ["white", "black", "red", "blue"];
  const [loader, SetLoader] = useState(true);
  const [isAdmin, SetIsAdmin] = useState(false);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    SetLoader(true);
    async function postLoader(params) {
      await sleep(3000);
      SetLoader(false);
    }

    if (localStorage.getItem("token")) {
      SetIsAdmin(true);
    } else SetIsAdmin(false);

    postLoader();
  }, []);

  return (
    <div className="items-list reveal">
      {items.map((item, index) => (
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
              <Link
                href={`/products/[name]/[id]`}
                as={`/products/iphone/1`}
                key={index}
              >
                <a aria-label="product">
                  {" "}
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
                </a>
              </Link>
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
              <div className="flex">
                <div className="price">32,000,000 تومان</div>
                {isAdmin && (
                  <div className="delete-btn">
                    <a>
                      <svg viewBox="0 0 59 59">
                        <g>
                          <path
                            d="M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289
		C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h46c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M21.792,2.681
		C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681c0.805,0.823,1.128,2.271,1.24,3.319H20.553
		C20.665,4.952,20.988,3.504,21.792,2.681z"
                          />
                          <path
                            d="M10.456,54.021C10.493,55.743,11.565,59,15.364,59h28.272c3.799,0,4.871-3.257,4.907-4.958L50.376,10H8.624L10.456,54.021z
		 M48.291,12l-1.747,41.979C46.538,54.288,46.4,57,43.636,57H15.364c-2.734,0-2.898-2.717-2.909-3.042L10.709,12H48.291z"
                          />
                          <path d="M17.5,54h24c0.552,0,1-0.447,1-1s-0.448-1-1-1h-24c-0.552,0-1,0.447-1,1S16.948,54,17.5,54z" />
                          <path d="M17.5,49h24c0.552,0,1-0.447,1-1s-0.448-1-1-1h-24c-0.552,0-1,0.447-1,1S16.948,49,17.5,49z" />
                          <path d="M17.5,44h24c0.552,0,1-0.447,1-1s-0.448-1-1-1h-24c-0.552,0-1,0.447-1,1S16.948,44,17.5,44z" />
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
