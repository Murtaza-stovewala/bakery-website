import logo from '../../assets/Bakery-Logo.png';
import "./Navbar.css";
import Button from '../Button/Button';



export default function NavBar(){
return(
    <nav className="navbar">
        <div className="navbar-container max-w-[1400px] h-[52px] mx-auto flex items-center justify-between">

        
        <a src={logo} className="navbar-logo">
          <img src={logo} alt="Bakery Logo" />
        </a>

        {/* Navigation */}
        <div className="navbar-links">
          <a href="/" className="nav-link">
            CAKES
          </a>

          <a href="/bakery" className="nav-link nav-dropdown">
            BAKERY
            <span className="dropdown-icon">⌄</span>
          </a>

          <a href="/about" className="nav-link">
            ABOUT US
          </a>

          <a href="/cookies" className="nav-link nav-dropdown">
            COOKIES
            <span className="dropdown-icon">⌄</span>
          </a>

          <a href="/contact" className="nav-link">
            CONTACT
          </a>
          <a href="/gallery" className="nav-link">
            GALLERY
          </a>
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          {/* <a href="/contact" className="start-baking">
            START BAKING
          </a> */}
          <Button link="/contact" >Start Baking</Button>

          <button className="cart-button" aria-label="View orders">
            🛍
          </button>
        </div>

      </div>


        
    </nav>
)
}
