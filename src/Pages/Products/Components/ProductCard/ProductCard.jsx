import { div } from "framer-motion/client";
import "./ProductCard.css";
import Button from "../../../../Components/Button/Button";

export default function ProductCard({ name, about,tag, price, pic }) {
    return (
        <article className="product-card">
            <div className='image-area'>
                <img src={pic} alt={tag} />
                {/* <span className="product-badge">new or bestselle</span> */}
            </div>
            <div className='product-card-info'>
                <h2>{name}</h2>
                <p>{about}</p>
                <div className="product-card-bottom">
                    <h3>{price}</h3>
                    <Button >Add Product</Button>
                </div>
                
            </div>
        </article>
    )
}