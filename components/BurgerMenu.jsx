import { useState } from "react";
import Link from "next/dist/client/link";

const BurgerMenu = ({items = []}) => {

    const [isLoggedIn, SetIsLoggedIn] = useState(false);

    function closenav() {
        document.getElementById("myNav").style.width = "0%";
      }
      
    return ( 
        
              <div id="myNav" className="overlay">
        <a href="#" className="closebtn" onClick={closenav} >&times;</a>
        <div className="overlay-content">
        <Link href="/"><a id="home-tag"> خانه
        </a>  
         </Link>
         <Link href="/about"><a id="about-tag"> درباره ما
        </a>  
         </Link>
         {items.map((item, index) => (
              <Link href={`/products`} key={index}><a className={`${item}-tag`}  onClick={closenav}> 
              {item}
              </a>  
               </Link>
         ))}
        
          
        </div>
      </div>
        
     );
}
 
export default BurgerMenu;