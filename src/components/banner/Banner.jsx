
import banner1 from "../../assets/women2.jpg"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
               {/* image section  */}
                  <div data-aos="zoom-in">
                    <img className="max-w-[450px] h-[350px] w-full object-cover rounded-md mx-auto drop-shadow-[-5px_10px_12px_rgba(0,0,0,5)] " src={banner1} alt="" />
                  </div>
               {/* text-section */}
                 <div className="flex flex-col gap-6 sm:pt-0 justify-center">
                  <h1 data-aos="fade-up" className="font-bold text-4xl"> Winter Sale upto 50% Off </h1>
                  <p data-aos="fade-up" className="text-sm text-gray-500  tracking-wide leading-7"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas architecto nesciunt minima laudantium excepturi velit est reprehenderit nostrum aspernatur totam.</p>
                  <div className="flex gap-2 flex-col ">
                    <div data-aos="fade-up" className="flex items-center gap-4 ">
                      <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100"/>
                      <p> Quality Products </p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4 ">
                      <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100"/>
                      <p> Fast Delivery</p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100" />
                   <p>Easy Payment method</p>
                  </div>
                 <div data-aos="fade-up" className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100" />
                    <p>Get Offers</p>
                 </div>
                   
                  </div>
                 </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Banner















