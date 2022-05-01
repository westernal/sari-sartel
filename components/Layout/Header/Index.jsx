import HeadTags from "../../Extras/HeadTags";
import UpperHeader from "./UpperHeader";
import DownHeader from "./DownHeader";

const Header = () => {
  return (
    <div className="header">
      <HeadTags />

      <UpperHeader />

      <DownHeader />
    </div>
  );
};

export default Header;
