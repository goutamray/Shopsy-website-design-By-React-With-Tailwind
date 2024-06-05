
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      <div>
        {
          orderPopup && 
           <div className="popup">
               <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm ">
                  <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-sm duration-200 w-[300px] ">
                     {/* Header part */}
                     <div className="flex items-center justify-between">
                        <div>
                          <h1>Order Now</h1>
                        </div>
                        <div>
                          <IoCloseOutline
                            className="text-2xl cursor-pointer "
                            onClick={() => setOrderPopup(false)}
                          />
                        </div>
                      </div>
                     {/* form part  */} 
                      <div className="mt-4">
                           <input type="text" placeholder="Name" className="rounded-full w-full border border-gray-300 px-2 py-1 mb-4"  />
                      </div>
                      <div className="mt-4">
                           <input type="text" placeholder="Email" className="rounded-full w-full border border-gray-300 px-2 py-1 mb-4"  />
                      </div>
                      <div className="mt-4">
                           <input type="text" placeholder="Adress" className="rounded-full w-full border border-gray-300 px-2 py-1 mb-4"  />
                      </div>
                      <div className="flex justify-center ">
                        <button className="bg-primary px-3 py-1 text-white rounded-full hover:scale-105  transition-all duration-300 "> Order Now </button>
                      </div>

                  </div>
               </div>
          </div>
        }
      </div>
    </>
  )
}

export default Popup









