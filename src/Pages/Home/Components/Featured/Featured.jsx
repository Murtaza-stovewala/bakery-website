import Button from '../../../../Components/Button/Button';
import "./Featured.css";
// import featured_img from '../../../../assets/Featured.png';
import featured_img from '../../../../assets/Brownie-feaured.png';
import featured_img2 from '../../../../assets/Featured-double-chocolate.png';
// import featured_img2 from '../../../../assets/Featured2.png';


import {
  StarSpark,
  WheatDoodle,
  Squiggle
} from "../doodles";

export default function Featured() {
  return (
    <section className="featured">

      <div className="featured-content">

        {/* LEFT - Featured Cake Image */}
        <div className="featured-image">

          {/* LEFT WHEAT DOODLE */}
          <WheatDoodle className="featured-wheat featured-wheat-left" />

          {/* FAMILY FUN WHEEL */}
          <div className="featured-decoration">

            <div className="featured-decoration-circle">

              <svg viewBox="0 0 120 120">
                <defs>
                  <path
                    id="featured-circle-path"
                    d="
                      M 60,60
                      m -47,0
                      a 47,47 0 1,1 94,0
                      a 47,47 0 1,1 -94,0
                    "
                  />
                </defs>

                <text>
                  <textPath
                    href="#featured-circle-path"
                    startOffset="50%"
                    textAnchor="middle"
                    textLength="289"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    OUR SIGNATURE BROWNIES • BAKED WITH LOVE •
                  </textPath>
                </text>

              </svg>

              <div className="featured-decoration-center">
                <img
                  src="/src/assets/cookie.png"
                  alt="Cookie"
                />
              </div>

            </div>

          </div>

          <div className="featured-image-bg"></div>

          <img
            src={featured_img}
            alt="Cup Cakes"
          />

        </div>


        {/* RIGHT - Featured Cake Details */}
        <div className="featured-text">

          {/* STAR */}
          <StarSpark className="featured-star" />

          {/* SQUIGGLE */}
          <Squiggle className="featured-squiggle" />

          <div className="featured-heading">

            <h2>
              MADE FOR
              <br />
              YOUR MOMENTS
            </h2>

          </div>


          <div className="featured-item">

            <p className="featured-label">
              Featured Item -
            </p>


            <div className="featured-product">

              <div className="product-preview">
                <img
                  src={featured_img2}
                  alt="Featured Brownie"
                />
              </div>

              <div className="product-info">

                <h3>
                  SIGNATURE DOUBLE CHOCOLATE BROWNIES 
                </h3>

                <p>
                  Made to order
                </p>

              </div>

              <div className="product-divider"></div>

              <div className="product-price">
                ₹320
              </div>

            </div>


            <p className="featured-description">
              Our brownies are baked to be rich, fudgy and unforgettable — from classic chocolate to indulgent loaded creations, every box is made with care.
            </p>

          </div>


          <Button>
           VIEW BROWNIES
          </Button>

          {/* RIGHT WHEAT DOODLE */}
          <WheatDoodle className="featured-wheat featured-wheat-right" />

        </div>

      </div>

    </section>
  );
}