import { Bars } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Image from "next/dist/client/image";

const Start = () => {
  return (
    <div className="start-page flex">
      <Image
        src="/Images/WhatsApp Image 2022-03-01 at 1.40.45 PM.jpeg"
        alt="logo"
        width={100}
        height={100}
      />
      <Bars color="#212121" height={110} width={80} />
    </div>
  );
};

export default Start;
