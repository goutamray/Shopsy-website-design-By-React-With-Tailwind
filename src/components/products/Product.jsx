
import { useEffect } from "react";
import { FaStar } from "react-icons/fa"; 

import AOS from "aos";

import { ProductsData } from "../../../faker/data"; 

const Product = ({ handleOrderPopup }) => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, [])

  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* product header section */}
            <div className="text-center max-w-[500px] mx-auto mb-10">
              <p data-aos="fade-up" className="text-sm text-primary"> Top Selling Products for you </p>
              <h2 data-aos="fade-up" className="font-bold text-3xl mb-"> Products </h2>
              <p data-aos="fade-up" className="text-xs  text-gray-400 "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi possimus fuga sapiente ut praesentium inventore.</p>
            </div>
          {/* product body section */}
            <div className="sm:gap-6"> 
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
                {
                  ProductsData.map((item, index) => {
                    return <div data-aos="fade-up" data-aos-delay={item.aosDelay} className="space-y-3 border shadow-md mx-3 overflow-hidden rounded-md text-center mb-4 xl:mb-0 " key={index}>
                        <img className="h-[220px] w-[280px] sm:w-[280px]  rounded-md object-cover cursor-pointer" src={item.img} alt="" />
                        <div>
                          <h2 className="font-semibold text-xl mb-1 mt-2 ml-2 cursor-pointer"> {item.title}</h2>
                          <p className="text-sm text-gray-600 ml-2 "> {item.color}</p>
                          <div className="flex gap-2 items-center ml-2 justify-center py-2 ">
                              <span className="flex gap-1"> 
                                <FaStar className="text-yellow-500"/> 
                                <FaStar className="text-yellow-500"/> 
                                <FaStar className="text-yellow-500"/> 
                                <FaStar className="text-yellow-500"/> 
                                <FaStar className="text-yellow-500"/> 
                              </span>
                               <p> {item.rating}</p>
                          </div>
                        </div>
                        <div className=" m-2">
                           <button onClick={() => handleOrderPopup() } className="bg-primary px-3 py-1 rounded-md text-white mb-5 hover:bg-gray-500 transition-all duration-300 hover:text-white"> Buy Now </button>
                        </div>
                    </div>
                  })
                }
              </div>
            </div>
            {/* bottom button  */}
            <div className="text-center mt-8">
              <button onClick={() => handleOrderPopup()} className="bg-primary px-4 py-2 rounded-md text-white mb-5"> View All Products </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Product
















