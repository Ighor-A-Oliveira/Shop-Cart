import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='h-[8    0px] w-screen bg-black flex items-center justify-center'>
        <div className='w-[90%] py-[15px] flex items-center justify-between'>
            <div className='text-white md:w-1/3'>
                <a href="/">Shopping Cart</a>
            </div>
            <div className='md:w-1/3'>
                <input type="text" className='bg-white outline-0 p-2 rounded-2xl w-min-[200px] md:w-[500px]' placeholder='Search for a product' />
            </div>
            <div className='md:w-1/3 flex justify-end'>
                <button className='flex items-center w-[75px] justify-center bg-emerald-600 py-2.5 px-0 align-middle cursor-pointer relative'
                    onClick={() => {setIsOpen(!isOpen)}}
                >
                    <FaShoppingCart color='white' size={"20"} />  
                    <div className='pl-1 pr-2 text-xs select-none text-white' >0</div>
                    <IoMdArrowDropdown color='white' size={"15"} />
                    {isOpen && 
                        <div className='absolute bg-white w-[150px] top-[40px] right-[0px] outline-1 outline-black min-w-[350px] select-text text-black p-2 py-4 shadow-md duration-200'
                            onMouseLeave={() => {setIsOpen(false)}}
                            onClick={(e) => e.stopPropagation()} // prevent dropdown from instantly closing but links should still work
                        >
                            <span className=''>Cart is empty!</span>
                        </div>
                    }
                </button>
            </div>
        </div>
    </div>
  )
}
