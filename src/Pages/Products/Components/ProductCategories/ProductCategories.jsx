import { useState } from "react";
import TabButton from "../../../../Components/TabButton/TabButton";
import "./ProductCategories.css";
import { productsByCategory, cakeCategories, categoryInfo } from "../../data";
import ProductCard from "../ProductCard/ProductCard";

// const cakeCategories = [
//   {
//     id: 1,
//     name: "ALL",
//     count: "30+",
//     tag: "ALL",
//     variant: "tab-button-yellow",
//   },{
//     id: 2,
//     name: "BROWNIES",
//     count: 7,
//     tag: "brownies",
//     variant: "tab-button-coral",
//   },
//   {
//     id: 3,
//     name: "CAKES",
//     count: 20,
//     tag: "birthdayCakes",
//     variant: "tab-button-lavender",
//   },
//   {
//     id: 4,
//     name: "Cookie",
//     count: 15,
//     tag: "cookies",
//     variant: "tab-button-lightorange",
//   },
//   {
//     id: 5,
//     name: "BENTO CAKES",
//     count: 6,
//     tag: "bentoCakes",
//     variant: "tab-button-light-aqua",
//   },
// ];

// const categoryInfo = {
//   ALL: {
//     title: "OUR SWEET COLLECTION",
//     description:
//       "Explore our complete collection of freshly baked cakes, brownies, cookies and delightful treats made with love."
//   },

//   brownies: {
//     title: "SIGNATURE BROWNIES",
//     description:
//       "Rich, fudgy and irresistibly chocolatey brownies, freshly baked to make every bite unforgettable."
//   },

//   birthdayCakes: {
//     title: "CELEBRATION CAKES",
//     description:
//       "Beautifully crafted cakes made to make birthdays, celebrations and your special moments even sweeter."
//   },

//   cookies: {
//     title: "FRESHLY BAKED COOKIES",
//     description:
//       "Delicious, comforting and freshly baked cookies made with quality ingredients and lots of love."
//   },

//   bentoCakes: {
//     title: "ADORABLE BENTO CAKES",
//     description:
//       "Small, beautiful and perfectly made cakes designed for sweet little celebrations and special moments."
//   }
// };

export default function ProductCategories() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  function handleSelect(category) {
    setSelectedCategory(category);
  }
  /** @type {typeof productsByCategory[keyof typeof productsByCategory]} */

  const products = productsByCategory[selectedCategory] || [];


  return (
    <section className="productcategories">

      <div className="productcategories-header">
        <h1 className="productcategories-title">
          OUR PREMIUM PRODUCTS
        </h1>
        <h3 className="productcategories-description">
          Enjoy the perfect blend of tradition and creativity in every bite, baked fresh daily with love and care!
        </h3>
      </div>
      <div className="productcategories-filters-wrap">
        <ul className="productcategories-filters">
          {cakeCategories.map((items) => (
            <TabButton key={items.id} label={items.name} count={items.count} onSelect={() => handleSelect(items.tag)} variant={items.variant} isSelected={selectedCategory == items.tag} />
          ))}
        </ul>
      </div>
      <div className="productcategories-display">
        <div className="productcategories-display-header">
          <h3>{categoryInfo[selectedCategory].title}</h3>
          <p>{categoryInfo[selectedCategory].description}</p>
        </div>
        <div className="productcategories-display-grid">
          {products.map((prod) => (
            <ProductCard key={prod.id} tag={prod.tag} name={prod.title} pic={prod.image} price={prod.price} about={prod.about} />
          ))}
        </div>
      </div>

    </section>
  )
}