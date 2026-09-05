import { useEffect, useState } from "react";
import { productsByCategory } from "../data";
import "./HomeProducts.css";
import ProductCard from "./HomeProductsCard";
import { Squiggle, StarSpark, WheatDoodle } from "../doodles";

const cakeCategories = [
  {
    id: 1,
    name: "BROWNIES",
    count: 7,
    tag: "brownies",
  },
  {
    id: 2,
    name: "BIRTHDAY CAKES",
    count: 12,
    tag: "birthdayCakes",
  },
  {
    id: 3,
    name: "CUSTOM CAKES",
    count: 8,
    tag: "customCakes",
  },
  {
    id: 4,
    name: "BENTO CAKES",
    count: 6,
    tag: "bentoCakes",
  },
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

    setActiveIndex((current) => {
      return (
        (current - 1 + products.length) %
        products.length
      );
    });
  }


  function showPrevious() {
    if (products.length <= 1) return;

    setDirection("previous");

    setActiveIndex((current) => {
      return (current + 1) % products.length;
    });
  }

  /*
    =========================================
    AUTOPLAY
    =========================================
  */

  useEffect(() => {
    if (isPaused || products.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      showNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, products.length, activeIndex]);



  function getSlidePosition(index) {
    const total = products.length;

    if (total === 0) {
      return "hidden";
    }

    const diff =
      (index - activeIndex + total) % total;

    /*
      CENTER
    */

    if (diff === 0) {
      return "now";
    }



    if (diff === total - 1) {
      return "prev";
    }


    if (diff === 1) {
      return "next";
    }

    if (
      direction === "next" &&
      diff === total - 2
    ) {
      return "enter-left";
    }



    if (
      direction === "next" &&
      diff === 2
    ) {
      return "exit-right";
    }



    if (
      direction === "previous" &&
      diff === 2
    ) {
      return "enter-right";
    }

    if (
      direction === "previous" &&
      diff === total - 2
    ) {
      return "exit-left";
    }

    return "hidden";
  }

  return (
    <section className="products">


      <div className="products-header">

        <div className="products-title-wrap">
          <h1 className="products-title">
            PRODUCTS WE BAKE
            FOR EVERY OCCASION-
          </h1>

          <Squiggle className="products-title-squiggle" />

          <StarSpark className="products-title-star" />
        </div>
        <div className="products-categories-wrap">
          <StarSpark className="products-category-star" />
          <ul className="products-categories">

            {cakeCategories.map((category) => (
              <TabButton
                key={category.id}
                label={category.name}
                count={category.count}
                onSelect={() =>
                  handleCategoryChange(category.tag)
                }
              />
            ))}

          </ul>
        </div>
      </div>


      {/* =====================================
          CAROUSEL
      ===================================== */}

      <div
        className="products-carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        <div className="products-carousel">

          {products.map((prod, index) => {

            const position = getSlidePosition(index);

            return (
              <div
                key={prod.id}
                className={`product-slide ${position}`}
              >

                <ProductCard
                  pic={prod.image}
                  tag={prod.tag}
                  name={prod.title}
                  price={prod.price}
                />

              </div>
            );
          })}

        </div>


        {/* =====================================
            LEFT ARROW
        ===================================== */}

        {products.length > 1 && (
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={showPrevious}
            aria-label="Previous product"
          >
            ←
          </button>
        )}


        {/* =====================================
            RIGHT ARROW
        ===================================== */}

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


      <div className="products-button"></div>

    </section>
  );
}