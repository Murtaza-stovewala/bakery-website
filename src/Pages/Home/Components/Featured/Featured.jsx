import Button from '../../../../Components/Button/Button';
import "./Featured.css";
import featured_img from '../../../../assets/Featured.png';

export default function Featured() {
  return (
    <section className="featured">

      <div className="featured-content">

        {/* LEFT - Featured Cake Image */}
        <div className="featured-image">

          <div className="featured-decoration">
            <svg viewBox="0 0 160 160">
              <defs>
                <path
                  id="featured-circle-path"
                  d="
          M 80,80
          m -58,0
          a 58,58 0 1,1 116,0
          a 58,58 0 1,1 -116,0
        "
                />
              </defs>

              <text>
                <textPath
                  href="#featured-circle-path"
                  startOffset="50%"
                  textAnchor="middle"
                  textLength="340"
                  lengthAdjust="spacingAndGlyphs"
                >
                  FAMILY FUN FOR THE WHOLE FAMILY
                </textPath>
              </text>
            </svg>

            <div className="featured-decoration-center">
              🍪
            </div>
          </div>

          <div className="featured-image-bg"></div>

          <img
            src={featured_img}
            alt="Custom Spider-Man birthday cake"
          />

        </div>


        {/* RIGHT - Featured Cake Details */}
        <div className="featured-text">

          <div className="featured-heading">

            <h2>
              YOUR ONLY
              <br />
              DOSE OF DELIGHT
            </h2>

            <span className="heading-decoration">🍪</span>

          </div>


          <div className="featured-item">

            <p className="featured-label">
              Featured Item -
            </p>


            <div className="featured-product">

              <div className="product-preview">
                <img
                  src={featured_img}
                  alt="Featured custom cake"
                />
              </div>

              <div className="product-info">
                <h3>Custom Birthday Cake</h3>
                <p>Made to order</p>
              </div>

              <div className="product-divider"></div>

              <div className="product-price">
                ₹1,200
              </div>

            </div>


            <p className="featured-description">
              Celebrate your special moments with a custom-made
              cake designed especially for you. Choose your favorite
              characters, colors, and ideas and bring your celebration
              to life.
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