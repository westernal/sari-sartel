import { Bars } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Start = () => {
    return ( 
        <div className="start-page flex">
            <img src="/Images/WhatsApp Image 2022-03-01 at 1.40.45 PM.jpeg" alt="logo" />
            <Bars color="#2e2b70" height={80} width={80} />
        </div>
     );
}
 
export default Start;
