
import Slider from "react-slick";

import { TestimonialData } from "../../../faker/data";

const Testimonial = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <>
      <div className="py-10 mb-10">
        <div className="container">
          {/* Testimonial header part */}
          <div className="text-center max-w-[500px] mx-auto mb-10">
              <p data-aos="fade-up" className="text-sm text-primary"> What our customers are saying  </p>
              <h2 data-aos="fade-up" className="font-bold text-3xl mb-"> Testimonials </h2>
              <p data-aos="fade-up" className="text-xs  text-gray-400 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nihil perspiciatis culpa quidem id aliquid?  </p>
           </div>
          {/* testimonial card */}
          <div data-aos="zoom-in">
            <Slider {...settings}> 
               {
                TestimonialData.map((item, index) => {
                  return <div  key={index}  className="mx-3"> 
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-6 rounded-xl bg-primary/10 relative ">
                    <div className="mb-3">
                      <img className="w-20 h-20 rounded-full " src={item.img} alt="" />

                    </div>
                    <div className="flex flex-col gap-4 ">
                      <div className="space-y-2"> 
                          <p className="text-sm text-gray-500 "> {item.text}</p>
                         <h2 className="text-xl text-black/80 font-bold  "> {item.name}</h2>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                  </div>
                  </div>
                })
               }
            </Slider>
          </div>

        </div>
      </div>
    </>
  )
}

export default Testimonial













