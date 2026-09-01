import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import ProductCard from "./ProductCard";

const cardVariants = {
  offHover: (angle) => ({
    rotateY: angle,
    z: 60,
    opacity: 0.9,
    scale: 1,
    zIndex: 30,
    transition: {
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  }),

  onHover: (hoverScale) => ({
    rotateY: 0,
    z: 120,
    opacity: 1,
    scale: hoverScale,
    zIndex: 50,
    transition: {
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  }),
};

const AngledCard = ({
  item,
  angle,
  hoverScale,
  cardWidth,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 group overflow-visible cursor-pointer"
      style={{
        width: cardWidth,
        height: "100%",
        transformStyle: "preserve-3d",
      }}
      custom={isHovered ? hoverScale : angle}
      variants={cardVariants}
      initial="offHover"
      animate={isHovered ? "onHover" : "offHover"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProductCard
        pic={item.image}
        tag={item.tag}
        name={item.title}
        price={item.price}
      />
    </motion.div>
  );
};
export const AngledSlider = ({
  items,
  speed = 40,
  direction = "left",
  containerHeight = "400px",
  cardWidth = "300px",
  gap = "40px",
  angle = 20,
  hoverScale = 1.05,
  className = "",
}) => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate items for infinite scrolling
  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    const calculateWidth = () => {
      const numWidth = parseInt(
        cardWidth?.toString().replace("px", "") || "300"
      );

      const numGap = parseInt(
        gap?.toString().replace("px", "") || "40"
      );

      if (!isNaN(numWidth) && !isNaN(numGap)) {
        const calculatedWidth =
          (numWidth + numGap) * items.length;

        setWidth(calculatedWidth);
      } else if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;

        setWidth(scrollWidth / 3);
      }
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [items, cardWidth, gap]);

  useEffect(() => {
    if (width <= 0) return;

    const startX =
      direction === "left" ? 0 : -width;

    const endX =
      direction === "left" ? -width : 0;

    if (isHovered) return;

    const runAnimation = () => {
      const currentX = x.get();

      const totalDist = width;

      const dist = Math.abs(
        endX - currentX
      );

      const duration =
        speed * (dist / totalDist);

      const controls = animate(
        x,
        endX,
        {
          duration,
          ease: "linear",

          onComplete: () => {
            x.set(startX);
            runAnimation();
          },
        }
      );

      return controls;
    };

    const animation = runAnimation();

    return () => {
      animation.stop();
    };
  }, [
    width,
    speed,
    direction,
    isHovered,
    x,
  ]);

  return (
    <div
      className={`
  relative
  w-full
  overflow-hidden
  bg-transparent
  ${className}
`}
      style={{
        height: containerHeight,
        perspective: "1000px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex items-center"
        style={{
          x,
          gap,
          transformStyle: "preserve-3d",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <AngledCard
            key={`${item.id}-${index}`}
            item={item}
            angle={angle}
            hoverScale={hoverScale}
            cardWidth={cardWidth}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AngledSlider;