import { useEffect, useState } from "react";
import { productsByCategory } from "../../data";
import "./HomeProducts.css";
import HomeProductCard from "./HomeProductsCard";

import {
  getNextIndex,
  getPreviousIndex,
  getSlidePosition,
} from "./carouselUtils";

import {
  Squiggle,
  StarSpark,
  WheatDoodle,
} from "../../../../Components/doodles";

import TabButton from "../../../../Components/TabButton/TabButton";

const cakeCategories = [
  {
    id: 1,
    name: "BROWNIES",
    count: 7,
    tag: "brownies",
    variant: "tab-button-coral",
  },
  {
    id: 2,
    name: "BIRTHDAY CAKES",
    count: 12,
    tag: "birthdayCakes",
    variant: "tab-button-lavender",
  },
  {
    id: 3,
    name: "CUSTOM CAKES",
    count: 8,
    tag: "customCakes",
    variant: "tab-button-lightorange",
  },
  {
    id: 4,
    name: "BENTO CAKES",
    count: 6,
    tag: "bentoCakes",
    variant: "tab-button-light-aqua",
  },
];

export default function HomeProducts() {
  const [selectedCategory, setSelectedCategory] = useState("brownies");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isPaused, setIsPaused] = useState(false);

  const products = productsByCategory[selectedCategory] || [];

  function handleCategoryChange(category) {
    setSelectedCategory(category);
    setActiveIndex(0);
    setDirection("next");
  }

  function showNext() {
    if (products.length <= 1) return;

    setDirection("next");

    setActiveIndex((current) =>
      getNextIndex(current, products.length)
    );
  }

  function showPrevious() {
    if (products.length <= 1) return;

    setDirection("previous");

    setActiveIndex((current) =>
      getPreviousIndex(current, products.length)
    );
  }

  useEffect(() => {
    if (isPaused || products.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      showNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, products.length, activeIndex]);

  return (
    <section className="homeproducts">
      <div className="homeproducts-header">
        <div className="homeproducts-title-wrap">
          <h1 className="homeproducts-title">
            PRODUCTS WE BAKE
            <br />
            FOR EVERY OCCASION-
          </h1>

          <Squiggle className="homeproducts-title-squiggle" />

          <StarSpark className="homeproducts-title-star" />
        </div>

        <div className="homeproducts-categories-wrap">
          <StarSpark className="homeproducts-category-star" />

          <ul className="homeproducts-categories">
            {cakeCategories.map((category) => (
              <TabButton key={category.id} label={category.name} count={category.count} variant={category.variant} onSelect={() =>handleCategoryChange(category.tag)} isSelected={selectedCategory==category.tag}/>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="homeproducts-carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="homeproducts-carousel">
          {products.map((prod, index) => {
            const position = getSlidePosition(
              index,
              activeIndex,
              products.length,
              direction
            );

            return (
              <div
                key={prod.id}
                className={`product-slide ${position}`}
              >
                <HomeProductCard
                  pic={prod.image}
                  tag={prod.tag}
                  name={prod.title}
                  price={prod.price}
                />
              </div>
            );
          })}
        </div>

        {products.length > 1 && (
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={showPrevious}
            aria-label="Previous product"
          >
            ←
          </button>
        )}

        {products.length > 1 && (
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={showNext}
            aria-label="Next product"
          >
            →
          </button>
        )}
      </div>

      <div className="homeproducts-button"></div>
    </section>
  );
}