import { useState } from "react"

// components 
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Banner from "./components/banner/Banner"

import FeatureProduct from "./components/products/FeatureProduct"
import Product from "./components/products/Product"
import SliderD from "./components/slider/SliderD"
import Subscribe from "./components/subscribe/Subscribe"
import Testimonial from "./components/testimonial/Testimonial"
import TopProduct from "./components/topProducts/TopProduct"
import Popup from "./components/popup/Popup"


function App() {

  const [orderPopup, setOrderPopup ] = useState(false);

  // handle order popup
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup); 
  }

  return (
    <>    
       <Navbar handleOrderPopup = {handleOrderPopup}/> 
       <SliderD handleOrderPopup = {handleOrderPopup}/> 
       <Product handleOrderPopup = {handleOrderPopup}/>
       <TopProduct handleOrderPopup = {handleOrderPopup}/> 
       <Banner /> 
       <Subscribe /> 
       <FeatureProduct handleOrderPopup = {handleOrderPopup}/> 
       <Testimonial /> 
       <Footer />
       <Popup orderPopup = {orderPopup} setOrderPopup = {setOrderPopup} /> 
    </>
  )
}

export default App
