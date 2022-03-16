import Link from "next/link";
import Image from "next/dist/client/image";

const ItemList = () => {
  const items = ["", "", "", ""];
  return (
    <div className="items-list reveal">
      {items.map((item, index) => (
        <Link href={`/products/[name]/[id]`} as={`/products/iphone/1`} key={index}>
          <a aria-label="product">
            <div className="item">
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
              <div className="item-color">
                <select name="color" id="color-select">
                  <option value="black">سیاه</option>
                  <option value="white">سفید</option>
                </select>
              </div>
              <div className="item-capacity">
                <select name="capacity" id="capacity-select">
                  <option value="64">64 GB</option>
                  <option value="128">128 GB</option>
                </select>
              </div>
              <div className="price">32,000,000 تومان</div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
