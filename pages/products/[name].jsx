import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ItemList from "../../components/ItemList";

const products = () => {

    const route = useRouter();

    useEffect(() => {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }

        async function pageAnimation(params) {
            const reveal = document.getElementsByClassName("reveal")[0]
            await sleep(500)
            reveal.classList.add("active");
        }  

        pageAnimation()
    },[])

    return ( 
        <div className={`products-page ${route.query.name}-page`}>
            <Header />
            <div className="main-title">
                <h1>{route.query.name}</h1>
                <div className="order-by">
                    <select name="order" id="order-select">
                    <option value="new">Newest</option>
                    <option value="highest price">Highest price</option>
                    <option value="lowest price"> Lowest price </option>
                    </select>
                </div>
            </div>
           <ItemList />

           <Footer />
        </div>
     );
}
 
export default products;
