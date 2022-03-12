import share1 from "../public/Images/Frame 85.svg"
import share2 from "../public/Images/Frame 85 (1).svg"
import share3 from "../public/Images/Frame 86.svg"
import { useEffect } from 'react'
import Image from "next/dist/client/image"


const PWAModal = () => {
    useEffect(() => {


        var x = window.matchMedia("(max-width: 922px)")
       
        if (x.matches ) {
           document.getElementById("myModal").style.display = "block"
      
        }
              var modal = document.getElementById("myModal");
      
      
              
              var span = document.getElementsByClassName("close1")[0];
              
              if (modal != null) {
              
                
            
              
              
              span.addEventListener("click",function() {
                modal.style.display = "none";
                
              });
              
              
              window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }
          }
      
    },[])
    return (    <div id="myModal" className="modal">

    <div className="modal-content">
      
      <div className="modal-main">
    
    <div className="flex"><Image  src="/Images/WhatsApp Image 2022-03-01 at 1.40.45 PM.jpeg" alt="logo" id="sartel" width={70} height={70}/></div>

    <h3>وب اپلیکیشن سارتل را به صفحه اصلی اضافه کنید و به راحتی از امکانات آن استفاده کنید </h3>
     <div className="share-info">
         <div className="si1"><Image src={share1.src} width={40} height={40} alt="pwa" /><p>در نوار پایین روی دکمه Share بزنید.</p></div>
         <div className="si1"><Image src={share2.src} width={40} height={40} alt="pwa"/><p> در ﻣﻨﻮی ﺑﺎز ﺷﺪه در ﻗﺴﻤﺖ ﭘﺎﯾﯿﻦ ﺻﻔﺤﻪ، ﮔﺰﯾﻨﻪ Add To Home Screen را انتخاب کنید.</p></div>
         <div className="si1"><Image src={share3.src} width={40} height={40} alt="pwa" /><p>در مرحله بعد در قسمت بالا روی Add بزنید. </p> </div>
     </div>
     <div className="mm-btn flex"><button className="close1" > فهمیدم</button>  </div>
     
    
    
    
    </div>
    </div>
    </div> );
}
 
export default PWAModal;