import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
         <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;