import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <a href="https://goo.gl/maps/gau94booSoe9dDGB9" aria-label="location link">
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
        <div className="socials flex">
          <a href="https://www.instagram.com/sarisartel2/" aria-label="instagram link">
            <Image
              src="/Images/icons8-instagram-30.png"
              alt="instagram logo"
              width={35}
              height={35}
            />
          </a>
          <a href="tel:01133201111" aria-label="telephone number">
            <Image
              src="/Images/icons8-ringer-volume-50.png"
              alt="telephone"
              id="telephone"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
