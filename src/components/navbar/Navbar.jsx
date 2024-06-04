
import logo from "../../assets/logo.png"
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa"; 
import { FaRegUserCircle } from "react-icons/fa"; 

const Navbar = () => {
  return (

    <div className="shadow-md bg-white 'dark:bg-gray-900' dark:bg-white "> 
      {/* upper  */}
      <div className="bg-primary/40 py-3 ">
        <div className="container flex justify-between items-center ">
          <div className="logo">
              <a className="capitailze font-bold text-2xl sm:text-3xl flex items-center gap-2" href="" >
                 <img className="w-16" src={logo} alt="logo" />
                 Shopsy
              </a>
          </div>
          <div className="right-part flex gap-3 justify-between items-center"> 
              <div className="search-cart">
                  <div className="group relative hidden sm:block">
                    <input type="text" placeholder="search" className="w-[200px] sm:w-[200px] hover:w-[300px] transition-all duration-300 border border-gray-400 rounded-full px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" />
                    <IoSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2"/> 
                  </div>
              </div>
              <div className="order-btn">
                <button onClick={()=> alert("Hello")} className="bg-primary duration-200 transition-all text-white py-1 px-3 rounded-full flex gap-3 items-center"> <span> Oder </span> <FaCartArrowDown  className="text-xl text-white drop-shadow-sm cursor-pointer"/> </button>
              </div>
              <div className="account-btn">
                <button className="bg-primary rounded-full px-2 py-2"> <FaRegUserCircle className="text-xl text-white drop-shadow-sm cursor-pointer"/> </button>
              </div>
          </div>
        </div>
      </div>

    {/* lower part */}
    <div className="container"> 
    <div className="flex justify-between items-center ">
        <div className="menu py-3">
          <ul className="flex gap-5 items-center justify-center ">
            <li> <a className="text-xl font-medium hover:text-primary transition-all duration-300 " href="#"> Home </a></li>
            <li> <a  className="text-xl font-medium hover:text-primary transition-all duration-300 " href="#"> About </a></li>
            <li> <a  className="text-xl font-medium hover:text-primary transition-all duration-300 " href="#"> Shop </a></li>
            <li> <a  className="text-xl font-medium hover:text-primary transition-all duration-300 " href="#"> Service </a></li>
            <li> <a  className="text-xl font-medium hover:text-primary transition-all duration-300 " href="#"> Blog </a></li>
            <li> <a  className="text-xl font-medium hover:text-primary transition-all duration-300 " href="#"> Contact </a></li>
          </ul>
        </div>
        <div className="theme-content flex gap-6">
          <p className="text-[17px] text-primary font-medium cursor-pointer"> Special Offer </p>
          <p className="text-[17px] font-medium cursor-pointer"> Pursase Theme</p>
        </div>
     </div>

  </div>
</div>
 
  )
}

export default Navbar; 





