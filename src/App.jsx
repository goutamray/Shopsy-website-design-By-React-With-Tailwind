import Banner from "./components/banner/Banner"
import Footer from "./components/footer/Footer"

import Navbar from "./components/navbar/Navbar"
import FeatureProduct from "./components/products/FeatureProduct"
import Product from "./components/products/Product"
import SliderD from "./components/slider/SliderD"
import Subscribe from "./components/subscribe/Subscribe"
import Testimonial from "./components/testimonial/Testimonial"
import TopProduct from "./components/topProducts/TopProduct"



function App() {
  return (
    <>    
       <Navbar /> 
       <SliderD /> 
       <Product />
       <TopProduct /> 
       <Banner /> 
       <Subscribe /> 
       <FeatureProduct /> 
       <Testimonial /> 
       <Footer />
    </>
  )
}

export default App
