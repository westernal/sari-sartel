import Image from "next/image";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import jwt_decode from "jwt-decode";
import API from "../../requests/API";

const UserInfo = () => {
  const [loader, SetLoader] = useState(false);
  const [user, SetUser] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      let userID = jwt_decode(localStorage.getItem("token"))._id;
      const option = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        redirect: "follow",
      };

      var result = await API(option, `api/user/getUser/${userID}`);

      if (result.status == 200) {
        SetLoader(false);
        SetUser(result.data);
      } else {
        toast.error(`${result.data.message}`);
        SetLoader(false);
      }
    }

    getUserInfo();
  }, []);
  return (
    <div className="user-profile flex">
      {loader && (
        <div className="flex loader">
          {" "}
          <Bars color="#212121" height={30} width={30} />
        </div>
      )}
      <div className="user-info">
        <div className="user-image">
          <Image
            src="/Images/icons8-male-user-64.png"
            alt="user's image"
            width={60}
            height={60}
          />
        </div>
        <div className="user-text">
          <div className="info">
            <h4>نام:</h4>
            <p>Ali Navidi</p>
          </div>
          <div className="info">
            <h4>ایمیل:</h4>
            <p>ali_navidi24@yahoo.com</p>
          </div>
          <div className="info">
            <h4>شماره تماس:</h4>
            <p>09339668289</p>
          </div>
          <div className="info">
            <h4> تاریخ ورود:</h4>
            <p>3/4/2022</p>
          </div>
        </div>
        <div className="buy-btn flex">
          <button>تغییر مشخصات</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
