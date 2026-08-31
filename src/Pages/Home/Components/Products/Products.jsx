import { img } from "../data";
 import "./Products.css";

function TabButton({label}) {
  return (
    <li>
    <button>{label}</button>
    </li>
  );
}
const cakeCategories = [
  { id: 1, name: 'BIRTHDAY CAKES', count: 12, slug: 'birthday-cakes' },
  { id: 2, name: 'CUSTOM CAKES', count: 8, slug: 'custom-cakes' },
  { id: 3, name: 'CUPCAKES', count: 15, slug: 'cupcakes' },
  { id: 4, name: 'PASTRIES', count: 10, slug: 'pastries' },
  { id: 5, name: 'COOKIES', count: 18, slug: 'cookies' },
  { id: 6, name: 'BROWNIES', count: 6, slug: 'brownies' }
];
function ProductCard({pic, tag,name,price}){
    return(
        <article>
            <div className='image-container'>
                <img src={pic} alt={tag}/>
            </div>
            <div className='product-info'>
                <h2>{name}</h2>
                <p>{tag}</p>
                <h3>{price}</h3>
            </div>
        </article>
    )
}

// const products = [
//   {
//     id: 1,
//     name: "...",
//     tag: "...",
const products = [
  {
    id:1,
    title: "Chocolate Cookies",
    price: "₹30",
    tag: "Freshly baked",
    image: img.cookiesGlucose,
    tone: "bg-yellow",
  },
  {
     id:2,
    title: "Sliced Bread",
    price: "₹80",
    tag: "Sourdough",
    image: img.slicedPiece,
    tone: "bg-teal",
  },
  {
     id:3,
    title: "Nutty Biscuits",
    price: "₹120",
    tag: "Hazelnut",
    image: img.nuttyBiscuits,
    tone: "bg-peach",
  },
  { 
    id:4,
    title: "Birthday Cake",
    price: "₹500",
    tag: "Custom made",
    image: img.croissantCard,
    tone: "bg-mutedcream",
  },
];

export default function Products(){
    return(
        <>
        <section className="products">
            <div className="products-header">
                <h1 className="products-title">PRODUCTS WE BAKE
FOR EVERY OCCASION-</h1>
                <ul className="products-categories">
                   {cakeCategories.map((category)=>(
                    <TabButton key={category.id} label={`${category.name} (${category.count})`}/>
                   ))}
                </ul>
            </div>
            <div className="products-list">
                 {products.map((prod)=>(
                    <ProductCard key={prod.id} pic={prod.image} tag={prod.tag} name={prod.title} price={prod.price}/>
                ))}
            </div>
            <div className="products-button">
               
            </div>
        </section>
        
        </>
    )
}