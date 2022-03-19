import { Bars } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Image from "next/dist/client/image";

const Start = () => {
  return (
    <div className="start-page flex">
      <Image
        src="/Images/logo-removebg-preview.png"
        alt="sari sartel's logo"
        width={108}
        height={40}
      />
      <Bars color="#212121" height={90} width={80} />
    </div>
  );
};

export default Start;
