import { useState } from "react";
import { img } from "../data";
import { productsByCategory } from "../data";
import "./Products.css";


const cakeCategories = [
  { id: 1, name: 'BROWNIES', count: 7, slug: 'brownies', tag: "brownies"},
  { id: 2, name: 'BIRTHDAY CAKES', count: 12, slug: 'birthday-cakes', tag: "birthdayCakes" },
  { id: 3, name: 'CUSTOM CAKES', count: 8, slug: 'custom-cakes', tag: "customCakes"  },
  { id: 4, name: 'BENTO CAKES', count: 6, slug: 'bento-cakes', tag: "bentoCakes" },
];

function TabButton({ label, count, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>
        <span>{label}</span>
        <span className="category-count">{count}</span>

      </button>
    </li>
  );
}


function ProductCard({ pic, tag, name, price }) {
  return (
    <article>
      <div className='image-container'>
        <img src={pic} alt={tag} />
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
// const products = [
//   {
//     id: 1,
//     title: "Chocolate Cookies",
//     price: "₹30",
//     tag: "Freshly baked",
//     image: img.cookiesGlucose,
//     tone: "bg-yellow",
//   },
//   {
//     id: 2,
//     title: "Sliced Bread",
//     price: "₹80",
//     tag: "Sourdough",
//     image: img.slicedPiece,
//     tone: "bg-teal",
//   },
//   {
//     id: 3,
//     title: "Nutty Biscuits",
//     price: "₹120",
//     tag: "Hazelnut",
//     image: img.nuttyBiscuits,
//     tone: "bg-peach",
//   },
//   {
//     id: 4,
//     title: "Birthday Cake",
//     price: "₹500",
//     tag: "Custom made",
//     image: img.croissantCard,
//     tone: "bg-mutedcream",
//   },
// ];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("brownies");

  function handleSelect(selectedButton) {
    setSelectedCategory(selectedButton);
  }
  const products=productsByCategory[selectedCategory];
  return (
    <>
      <section className="products">
        <div className="products-header">
          <h1 className="products-title">PRODUCTS WE BAKE
            FOR EVERY OCCASION-</h1>
          <ul className="products-categories">
            {cakeCategories.map((category) => (
              <TabButton key={category.id} label={category.name} count={category.count} onSelect={()=>handleSelect(category.tag)} />
            ))}
          </ul>
        </div>
        <div className="products-list">
          {products.map((prod) => (
            <ProductCard key={prod.id} pic={prod.image} tag={prod.tag} name={prod.title} price={prod.price} />
          ))}
        </div>
        <div className="products-button">

        </div>
      </section>

    </>
  )
}