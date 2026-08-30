import Button from '../../../../Components/Button/Button';
import "./Featured.css";
import featured_img from '../../../../assets/Featured.png';
import featured_img2 from '../../../../assets/Featured2.png';

export default function Featured() {
  return (
    <section className="featured">

      <div className="featured-content">

        {/* LEFT - Featured Cake Image */}
        <div className="featured-image">

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
                    textLength="275"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    FAMILY FUN FOR THE WHOLE FAMILY 
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
                  alt="Featured custom cake"
                />
              </div>

              <div className="product-info">
                <h3>Custom Birthday Cake</h3>
                <p>Made to order</p>
              </div>

              <div className="product-divider"></div>

              <div className="product-price">
                ₹500
              </div>

            </div>


            <p className="featured-description">
              Make every celebration a little sweeter with a custom cake made just for you. Choose your design, colors, flavors, and details — we’ll turn your idea into something deliciously special.
            </p>

          </div>


          <Button>
            VIEW CUSTOM CAKES
          </Button>

        </div>

      </div>

    </section>
  );
}