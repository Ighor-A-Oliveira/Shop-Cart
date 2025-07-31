import React from 'react'
import CartList from './CartList'

export default function DropDownMenu({isOpen, setIsOpen, cart}) {
  return (
    <>
        {isOpen && 
            <div className='absolute bg-white w-[150px] h-auto top-[40px] right-[0px] outline-1 outline-black min-w-[350px] select-text text-black p-2 py-4 shadow-md duration-200 z-40'
                onMouseLeave={() => {setIsOpen(false)}}
                onClick={(e) => e.stopPropagation()} // prevent dropdown from instantly closing but links should still work
            >
                <span className='flex flex-col items-start pl-[10px]'>
                    {
                        cart.length > 0 ? 
                            /* renders the list of items in the cart */
                            <CartList cart={cart}/>
                            :   
                            "Cart is Empty"
                    }
                </span>
            </div>
        }
    
    </>
  )
}
