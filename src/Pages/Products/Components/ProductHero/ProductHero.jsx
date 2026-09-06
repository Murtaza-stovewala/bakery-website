import hero_img from "../../../../assets/Product-Hero.png";
import Button from "../../../../Components/Button/Button";
import "./ProductHero.css";
import leafIcon from "../../../../assets/icons/leaf.svg";
import heartIcon from "../../../../assets/icons/heart.svg";
import cupcakeIcon from "../../../../assets/icons/cupcake.svg";



export default function ProductHero() {
    return (
        <section className="product-hero">
            <div className="product-hero-image">
                <img src={hero_img} alt="" />
            </div>

            <div className="background-overlay"></div>

            <div className="product-hero-content">
                <div className="product-tagline-wrapper">
                    <p className="product-tagline">
                        CAKE GALLERY BY ALEFIYA
                    </p>

                    <span className="product-tagline-line"></span>
                </div>

                <h1 className="product-hero-heading">
                    SOMETHING
                    <span>SWEET</span> FOR
                    EVERY MOMENT
                </h1>

                <h3 className="product-hero-text">
                    Cakes, brownies, cookies and desserts
                    made fresh with love, just for you.
                </h3>

                <Button>Explore Our Products</Button>

                <div className="product-hero-highlights">
                    <div>
                        <div className="hero-freshly backed">
                            <img src={leafIcon} alt="Freshly baked" />
                        </div>

                        <p>
                            Freshly
                            <br />
                            Baked
                        </p>
                    </div>

                    <div>
                        <div className="hero-freshly backed">
                            {/* <span>♡</span> */}
                            <img src={heartIcon} alt="Freshly baked" />

                        </div>

                        <p>
                            Premium
                            <br />
                            Ingredients
                        </p>
                    </div>

                    <div>
                        <div className="hero-freshly backed">
                            <img src={cupcakeIcon} alt="Freshly baked" />
                        </div>

                        <p>
                            Made
                            <br />
                            with Love
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}