import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/dist/client/image";

const User = () => {
    return ( 
       <>
       <Header />
        <div className="user-profile flex">
            <div className="user-info">
                <div className="user-image">
                    <Image src="/Images/icons8-male-user-64.png" alt="user's image"  width={60} height={60}/>
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
                <div className="buy-btn flex"><button>Edit</button></div>
            </div>
        </div>
        <Footer />
       </>
     );
}
 
export default User;