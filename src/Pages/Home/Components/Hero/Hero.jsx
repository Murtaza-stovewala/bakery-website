import Button from '../../../../Components/Button/Button';
import "./Hero.css";
import hero_img from '../../../../assets/hero-main.webp';

import {
  StarSpark,
  WheatDoodle,
  Squiggle
} from "../../../../Components/doodles";

export default function Hero() {

  return (

    <section className="hero">

      <div className="hero-content">

        <StarSpark className="hero-star hero-star-top" />

        <WheatDoodle className="hero-wheat hero-wheat-left" />

        <WheatDoodle className="hero-wheat hero-wheat-right" />

        <h1 className="hero-title">
          Professional Home Baker
        </h1>

        <div className="hero-text">

          <Squiggle className="hero-squiggle" />

          <h2>
            Homemade cakes, brownies, cookies & more — made fresh on pre-order.
          </h2>

          <p>
            We're passionate about creating delicious treats
            you'll love.
          </p>

          <div className="hero-actions">

            <Button link="/contact">
              EXPLORE MENU
            </Button>

          </div>

        </div>

        <div className="hero-image">

          <StarSpark className="hero-star hero-star-image" />

          <img
            src={hero_img}
            alt="Professional Home Baker"
          />

        </div>

        <Squiggle className="hero-bottom-squiggle" />

      </div>

    </section>

  );

}