import { Link } from "react-router-dom";
import logo from '../../assets/Bakery-Logo.png';
import "./Navbar.css";
import Button from '../Button/Button';

const navLinkStyles = "your Tailwind classes here";

export default function NavBar(){
return(
    <nav className="navbar">
        <div className="navbar-container max-w-[1400px] h-[52px] mx-auto flex items-center justify-between">

        
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Bakery Logo" />
        </Link>

        {/* Navigation */}
        <div className="navbar-links flex items-center gap-8">
          <Link to="/" className="nav-link">
            HOME
          </Link>

          <Link to="/products" className="nav-link nav-dropdown">
            PRODUCTS
            <span className="dropdown-icon">⌄</span>
          </Link>

          <Link to="/about" className="nav-link">
            ABOUT US
          </Link>

          {/* <a href="/BAKERY" className="nav-link nav-dropdown">
            BAKERY
            <span className="dropdown-icon">⌄</span>
          </a> */}

          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
          <Link to="/gallery" className="nav-link">
            GALLERY
          </Link>
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          {/* <a href="/contact" className="start-baking">
            START BAKING
          </a> */}
          <Button Link="/contact" >Start Baking</Button>

          <button className="cart-button" aria-label="View orders">
            🛍
          </button>
        </div>

      </div>


        
    </nav>
)
}

/*
PRODUCTS ▼
│
├── ALL PRODUCTS
├── BROWNIES
├── BIRTHDAY CAKES
├── CUSTOM CAKES
├── BENTO CAKES
├── COOKIES
└── DESSERTS
ALL PRODUCTS
/products

BROWNIES
/products?category=brownies


*/