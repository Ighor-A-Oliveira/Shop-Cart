import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { CartState } from '../Context/Context';
import DropDownMenu from './DropDownMenu';
import { Link } from 'react-router-dom';


export default function Header() {
    const {state: {cart}, productDispatch } = CartState()
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='h-[80px] w-full bg-black flex items-center justify-center fixed'>
        <div className='w-[90%] py-[15px] flex items-center justify-between'>

            <div className='text-white block lg:hidden'>
                <RxHamburgerMenu size={"25px"}/>
            </div>

            <div className='text-white lg:w-1/3'>
                <Link className='text-lg md:text-4xl' to="/">Shopping Cart</Link>
            </div>
            <div className='hidden lg:block lg:w-1/3'>
                <input type="text" className='bg-white outline-0 p-2 rounded-2xl w-min-[200px] md:w-[500px]' placeholder='Search for a product' 
                    onChange={(e) => {
                        productDispatch({
                        type: "FILTER_BY_SEARCH",
                        payload: e.target.value,
                        });
                    }}
                />
            </div>
            <div className='lg:w-1/3 flex justify-end'>
                <button className='flex items-center w-[75px] justify-center bg-emerald-600 py-2.5 px-0 align-middle cursor-pointer relative'
                    onClick={() => {setIsOpen(!isOpen)}}
                >
                    <FaShoppingCart color='white' size={"20"} />  
                    <div className='pl-1 pr-2 text-xs select-none text-white' >{cart.length}</div>
                    <IoMdArrowDropdown color='white' size={"15"} />
                    
                    {/* controls the dropdown menu */}
                    <DropDownMenu isOpen={isOpen} setIsOpen={setIsOpen} cart={cart}/>
                </button>
            </div>
        </div>
    </div>
  )
}
