
import banner from "../../assets/orange.jpg";

const BannerImg = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <>
      <div data-aos="zoon-in" >
        <div
         className="bg-gray-100 text-white mb-20" style={BannerImg}>
             <div className="container backdrop-blur-sm py-12">
                 <div className=" max-w-xl mx-auto">
                  <h1 data-aos="fade-up" className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold mb-3"> Get Notified About New Products </h1>
                  <input  type="text" className="w-full p-3 rounded focus:outline-none" placeholder="Enter Your Email"/>
                  <div className="my-btn text-center mt-2">
                  <button className="bg-blue-500 py-2 px-3 w-[150px] rounded "> Subscribe Now </button>
                  </div>
                  <p data-aos="fade-up" className="text-center mt-2"> Will be used in accordance with our <a href="#" className="text-md text-blue-600 font-medium"> Privacy Policy </a> </p>
                 </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe




