const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-container">
            <a href="https://goo.gl/maps/gau94booSoe9dDGB9">
            <div className="location flex">
                 <img src="/Images/icons8-location-50.png" alt="location" />
                 <p>IRAN - MAZANDARAN - SARI - SHAHABI STREET - ALMAHDI STREET</p>
             </div>
            </a>
             <div className="socials flex">
                 <a href="https://www.instagram.com/sarisartel2/">
                     <img src="/Images/icons8-instagram.svg" alt="instagram logo" />
                 </a>
                 <a href="tel:01133201111">
                     <img src="/Images/icons8-ringer-volume-50.png" alt="telephone" id="telephone"/>
                 </a>
             </div>
            </div>
        </div>
     );
}
 
export default Footer;