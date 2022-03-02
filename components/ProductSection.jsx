import ItemList from "./ItemList";
import Link from "next/dist/client/link";

const ProductSection = ({ name }) => {
    return ( 
        <div className="product-section reveal">
             <div className="main-title">
           <Link href={`/products/${name}`}><a>
               <h2>{name}</h2>
               </a></Link>
       </div>
       <ItemList />
        </div>
     );
}
 
export default ProductSection;