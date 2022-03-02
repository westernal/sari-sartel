import { useState } from "react";
import Link from "next/dist/client/link";

const BurgerMenu = ({items = []}) => {

    const [isLoggedIn, SetIsLoggedIn] = useState(false);

    function closenav() {
        document.getElementById("myNav").style.width = "0%";
      }
      
    return ( 
        <div className="burger-menu">
              <div id="myNav" className="overlay">
        <a href="#" className="closebtn" onClick={closenav} >&times;</a>
        <div className="overlay-content">
        <Link href="/"><a id="home-tag"> Home
        </a>  
         </Link>
         {items.map((item, index) => (
              <Link href={`/products/${item}`}><a className={`${item}-tag`} key={index} onClick={closenav}> 
              {item}
              </a>  
               </Link>
         ))}
        
          {!isLoggedIn && <Link href="/profile/sign-in"><a > Login </a></Link> }
            {isLoggedIn && <a  href="#" onClick={logOut}> Logout </a>}
        </div>
      </div>
        </div>
     );
}
 
export default BurgerMenu;