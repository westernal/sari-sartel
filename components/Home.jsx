import { useEffect } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import ProductSection from "./ProductSection";

const Home = () => {

    useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
          
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }
          
          window.addEventListener("scroll", reveal);
    },[])


    return ( 
    <div className="home-page">
       <Header />

       <About />

       <div className="products-section">
           
             <ProductSection name="Phones" />

             <ProductSection name="Tablets" />

             <ProductSection name="Accessories" />

             <ProductSection name="Speakers" />

             <ProductSection name="Smart Watches" />   
      
        </div> 

        <Footer />

    </div> 
    );
}
 
export default Home;