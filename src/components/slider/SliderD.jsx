
import { ImageList } from "../../../faker/data";
import Slider from "react-slick";

const SliderD = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }; 

  return (
    <>
      <div className="relative overflow-hidden bg-gray-200 min-h-[400px] sm:min-h-[550px]  flex justify-center">
        {/* background pattern  */}
        <div className="h-[650px] w-[650px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-10">

        </div>

        {/* hero pattern  */}
        <div className="container pb-2 sm:pb-0 pt-40">
          <Slider {...settings} >
            {
              ImageList.map((item, index) => {
                return  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10" key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div >
                      <h1 data-aos="zoom-out" data-aos-once="true" data-aos-duration="600" className="text-7xl sm:text-6xl lg:text-7xl mb-3"> {item.title}</h1>
                      <p data-aos="fade-up" data-aos-duration="500"   data-aos-delay="100" className="text-md mb-2"> {item.description}</p>
                      <div data-aos="fade-up" data-aos-duration="500"   data-aos-delay="100">
                        <button className="bg-primary hover:scale-100 duration-200 py-1 px-3 rounded-full text-white text-xl "> Order Now </button>
                      </div>
                    </div>
                    <div className="order-1 sm:order-2">
                      <div data-aos="zoom-in" data-aos-once="true" className="relative z-12">
                        <img  className="w-[300px] h-[280px] sm:w-[480px] sm:h-[300px]  sm:scale-125 lg:scale-120 object-contain mx-auto " src={item.img} alt="" />
                      </div>
                    </div>
                </div>
              </div>
              })
            }
           
         </Slider>
        </div>

      </div>
    </>
  )
}

export default SliderD


