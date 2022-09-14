// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./About"
import Brands from "./Mainpages/Brands"
import Careers from "./Subpages/Careers"
import Cart from "./Cart"
import Contact from "./Subpages/Contact"
import Deals from './Deals'
import Dell from "./Subpages/Dell"
import DropDown from './DropDown'
// import Footer from "./Footer"
import Home from './Home'
import Hp from "./Subpages/Hp"
import Lenovo from "./Subpages/Lenovo"
import Locations from "./Mainpages/Locations"
import Navbar from './Navbar'
import New from "./Subpages/New"
import OnSale from "./Subpages/OnSale"
import Ontario from "./Subpages/Ontario"
import OurStory from "./Subpages/OurStory"
import OwenSound from "./Subpages/OwenSound"
import Popular from "./Subpages/Popular"
import Sales from "./Mainpages/Sales"
import Toronto from "./Subpages/Toronto"
import ProductDetails from "./ProductDetails"
import ProductList from "./ProductList"

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <DropDown />
        <div>
          <Routes>
            {/* NAV BAR LINKS */}
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            {/* DROPDOWN MENU LINKS */}
            <Route path="/sales" element={<Sales />}/>
            <Route path="/brands" element={<Brands />}/>
            <Route path="/locations" element={<Locations />}/>
            {/* DROPDOWN SUBMENU LINKS */}
            <Route path="/popular" element={<Popular />}/>
            <Route path="/on-sale" element={<OnSale />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/hp" element={<Hp />}/>
            <Route path="/dell" element={<Dell />}/>
            <Route path="/lenovo" element={<Lenovo />}/>            
            <Route path="/ontario" element={<Ontario />}/>            
            <Route path="/toronto" element={<Toronto />}/>            
            <Route path="/owen-sound" element={<OwenSound />}/>            
            <Route path="/our-story" element={<OurStory />}/>            
            <Route path="/contact" element={<Contact />}/>            
            <Route path="/careers" element={<Careers />}/> 
            {/* Unique Pages */}
            <Route path="products/:id" element={<ProductDetails />}/>
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
    
  )
}

export default App
