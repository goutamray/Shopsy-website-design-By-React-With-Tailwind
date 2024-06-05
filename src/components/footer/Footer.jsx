
import logo from "../../assets/logo.png";
import footer from "../../assets/footer.jpg"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa"; 

 import { FooterLinks } from "../../../faker/data";

const BannerImg = {
  backgroundImage: `url(${footer})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};


const Footer = () => {
  return (
    <> 
    <div style={BannerImg} className="text-white">
       <div className="container">
          <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-14 pt-5">
          {/* company details data */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 cursor-pointer">  
                <img className="max-w-[50px] cursor-pointer" src={logo} alt="" /> 
                Shopsy 
             </h1>
              <p className="pr-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates ipsum provident. Molestias mollitia repellat quod porro vel tempore eaque. </p>
            </div>
          {/* route links  */}
              <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md-pl-10">
                <div>
                  <div className="py-8 px-4">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3"> Important Links </h1>
                    <ul className="flex flex-col gap-3">
                      {
                        FooterLinks.map((item, index) => {
                          return <li key={index} className="cursor-pointer hover:text-primary hover:translate-x-1 transition-all duration-300 text-gray-200"> 
                          <span> {item.title}</span>
                          </li>
                        })
                      }
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="py-8 px-4">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3"> Links </h1>
                    <ul className="flex flex-col gap-3">
                      {
                        FooterLinks.map((item, index) => {
                          return <li key={index} className="cursor-pointer hover:text-primary hover:translate-x-1 transition-all duration-300 text-gray-200"> 
                          <span> {item.title}</span>
                          </li>
                        })
                      }
                    </ul>
                  </div>
                </div>

                {/* social links  */}
                <div className="py-8 px-4">
                  <div className="flex gap-2 ">
                    <a href=""> <FaInstagram className="text-3xl"/> </a>
                    <a href=""> <FaFacebook className="text-3xl"/> </a>
                    <a href=""> <FaLinkedin className="text-3xl"/> </a>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <span> <FaLocationArrow className="text-xl"/>  </span>
                    <p> Rangpur, Mistripara </p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <span> <FaMobileAlt className="text-xl"/>  </span>
                    <p> +88 01755302053 </p>
                  </div>
                </div>
              </div>

          </div>
          
       </div>
    </div>
    {/* bootom footer */}
     <div className="footer-text text-center py-4 bg-primary/80 flex items-center justify-center ">
             <div className="container">
               <p className="text-white font-medium text-md"> @copyright 2024 Reserved By <a className="text-blue-500 text-md font-medium " href="#"> Goutam Ray</a></p>
             </div>
          </div>

    </>
  )
}

export default Footer


