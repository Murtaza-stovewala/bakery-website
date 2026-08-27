import Button from '../../../../Components/Button/Button';
import "./Hero.css"
import hero_img from '../../../../assets/hero-main.png';
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Professional Home Baker</h1>
        {/* <div className="hero-title-wrapper">
          <span className="hero-steam">≋</span>

          <h1 className="hero-title">
            BAKE <span className="tasty-badge">TASTY</span> THE
            <br />
            COOKIES <span className="crunchy-badge">CRUNCHY</span>
          </h1>
        </div> */}


        <div className="hero-text">

          <h2>Homemade cakes, brownies, cookies & more — made fresh on pre-order.</h2>
          <p>
            We're passionate about creating delicious treats
            you'll love.
          </p>
          <div className="hero-actions">
            <Button link="/contact">EXPLORE MENU</Button>
            {/* Button will go here */}
          </div>
        </div>
        <div className="hero-image">
          <img src={hero_img} alt="Hero Image" />
        </div>
      </div>
    </section>
  )
}