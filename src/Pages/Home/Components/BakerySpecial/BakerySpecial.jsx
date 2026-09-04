import Button from "../../../../Components/Button/Button";
import "./BakerySpecial.css";
import { img } from "../data";
import {
  StarSpark,
  WheatDoodle,
  Squiggle,
  HandCircle,
} from "../doodles";

import featured_img from "../../../../assets/Brownie-feaured.png";
import featured_img2 from "../../../../assets/Featured-double-chocolate.png";
import logo from "../../../../assets/Bakery-Logo.jpeg";
import cookie from '../../../../assets/cookie.png';

export default function BakerySpecial() {
  return (
    <section className="bakery-special">
      <div className="bakery-special-container">

        <div className="bakery-special-header">

          <div className="bakery-special-heading">
            <HandCircle className="bakery-special-circle" />

            <h2>
              WHY ARE OUR
              <br />
              BAKERY ITEMS
              <br />
              SO SPECIAL
              <br />
              TO OUR CUSTOMERS?
            </h2>
          </div>

          <div className="bakery-special-header-action">
            <Squiggle className="bakery-special-squiggle" />

            <Button>
              <span>•</span>
              SHOP NOW
            </Button>
          </div>

        </div>

        <div className="bakery-special-showcase">

          <div className="bakery-special-left">

            <div className="bakery-special-main-image">
              <img
                src={featured_img}
                alt="Signature assorted brownie box"
                loading="lazy"
              />
            </div>

            <div className="bakery-special-small-image">
              <img
                src={featured_img2}
                alt="Double chocolate brownie"
                loading="lazy"
              />
            </div>

          </div>

          <div className="bakery-special-middle">

            <div className="bakery-special-baker">
              <img
                src={logo}
                alt="Baker preparing fresh bakery items"
                loading="lazy"
              />

              <div className="bakery-special-baker-tag">
                <span>•</span>
                FRESHLY BAKED
              </div>
            </div>

            <div className="bakery-special-quote">

              <span className="bakery-special-quote-mark">
                “
              </span>

              <p>
                Every brownie is baked with care,
                rich chocolate and a whole lot of love.
                That's what makes every bite special.
              </p>

              <strong>
                — CAKE GALLERY BY ALEFIYA
              </strong>

            </div>

          </div>

          <div className="bakery-special-promo">

            <StarSpark className="bakery-special-promo-star" />

            <h3>
              TASTE
              <br />
              THE REAL
              <br />
              BROWNIE
              <br />
              GOODNESS.
            </h3>

            <p>
              FRESH • FUDGY
              <br />
              BAKED WITH LOVE
            </p>

            {/* <div className="bakery-special-promo-image">
              <img
                src={featured_img2}
                alt="Double chocolate brownie"
                loading="lazy"
              />
            </div> */}

          </div>

          <WheatDoodle className="bakery-special-wheat bakery-special-wheat-left" />

          <WheatDoodle className="bakery-special-wheat bakery-special-wheat-right" />

        </div>

        <div className="bakery-special-favourites">

          <div className="bakery-special-favourites-left">

            <div className="bakery-special-favourites-heading">

              <StarSpark className="bakery-special-favourites-star" />

              <h3>
                GOOD BROWNIES.
                <br />
                GOOD MOOD.
                <br />
                EVERY TIME!
              </h3>

            </div>

            <div className="bakery-special-favourites-note">

              <div className="bakery-special-avatar">
                <span>♡</span>
              </div>

              <p>
                Baked fresh with care
                <br />
                for your sweetest moments.
              </p>

            </div>

          </div>

          <div className="bakery-special-favourites-divider"></div>

          <div className="bakery-special-favourites-right">

            <div className="bakery-special-rating">

              <strong>★★★★★</strong>

              <span>
                CUSTOMER
                <br />
                FAVOURITES
              </span>

            </div>

            <div className="bakery-special-pills">

              <span className="active">
                BROWNIES
              </span>

              <span>
                BIRTHDAY CAKES
              </span>

              <span>
                CUSTOM CAKES
              </span>

              <span>
                COOKIES
              </span>

              <span>
                DESSERTS
              </span>

            </div>

          </div>

          <div className="bakery-special-favourites-cookie">
            <img
              src={cookie}
              alt="cookie"
              aria-hidden="true"
            />
          </div>

        </div>

      </div>
    </section>
  );
}