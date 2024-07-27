
import { FaStar } from "react-icons/fa"; 
import { TopData } from "../../../faker/data";

const TopProduct = ({ handleOrderPopup }) => {
  return ( 
    <>
       <div className="pt-10 pb-10">
        <div className="container">
            {/* product header section */}
            <div className="text-center max-w-[500px] mx-auto mb-10">
              <p className="text-md font-medium text-primary"> Top Selling Products for you </p>
              <h2  className="font-bold text-3xl mb-2 py-2"> Best Products </h2>
              <p className="text-xs  text-gray-400 "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi possimus fuga sapiente ut praesentium inventore.</p>
            </div>
            {/* body part */}
            <div className="body-part grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center  pt-20">
                {
                  TopData.map((item, index) => {
                    return <div key={index}  data-aos="zoom-in">
                      <div  className="bg-white rounded-2xl relative shadow-xl duration-600 group max-w-[320px] border border-gray-200 hover:bg-black/80 hover:text-white"> 
                      <div className="h-[300px] w-[2500px] md:w-[250px] lg:w-[300px]">
                         <img className="max-w-[270px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" src={item.img} alt="" />
                      </div>

                      {/* content  */}
                      <div className="text-center p-4 mx-auto">
                           <div className="w-full flex gap-1 justify-center items-center"> 
                               <FaStar className="text-yellow-500"/> 
                               <FaStar className="text-yellow-500"/>
                               <FaStar className="text-yellow-500"/>
                               <FaStar className="text-yellow-500"/>
                               <FaStar className="text-yellow-500"/>  
                           </div>
                          <h3 className="text-2xl font-bold py-2"> {item.title}</h3>
                          <p className="text-gray-500 group-hover:text-white duration-300 text-md line-clamp-2"> {item.description}</p>
                        </div>
                        <div className="flex justify-center items-center mb-4"> 
                           <button onClick={() => handleOrderPopup() } className="bg-primary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 group-hover:bg-white  group-hover:text-primary"> Order Now </button>
                       </div>
                      </div>
                    </div>
                  })
                }
            </div>
        </div>
       </div>
    </>
  )
}

export default TopProduct; 
















