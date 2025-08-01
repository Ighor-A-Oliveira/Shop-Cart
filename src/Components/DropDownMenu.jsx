import React from 'react'
import CartList from './CartList'
import { Link } from 'react-router-dom'

export default function DropDownMenu({isOpen, setIsOpen, cart}) {
  return (
    <>
        {isOpen && 
            <div className='absolute bg-white w-[150px] min-h-[60px] h-auto top-[40px] right-[0px] outline-1 outline-black min-w-[350px] select-text text-black p-2 shadow-md duration-200 z-40'
                onMouseLeave={() => {setIsOpen(false)}}
                onClick={(e) => e.stopPropagation()} // prevent dropdown from instantly closing but links should still work
            >
                <span className='flex flex-col items-start w-full max-h-[500px] overflow-y-auto'>
                    {
                        cart.length > 0 ? 
                            /* renders the list of items in the cart */
                            (
                                <>
                                    <CartList cart={cart}/>
                                </>
                            )
                            :   
                            <h1 className='mb-[25px]'>Cart is Empty</h1>
                    }
                    <button className='w-full py-2 bg-blue-600 text-white rounded-sm '>
                        <Link to="/cart" onClick={() => setIsOpen(false)}>Go to cart</Link>
                    </button>
                </span>
            </div>
        }
    
    </>
  )
}
