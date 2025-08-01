import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { CartState } from '../Context/Context';

export default function CartList({cart}) {
  const { dispatch } = CartState();
    
  return (
    <>
      {cart.map((item) => 
        <div className='w-full mx-auto flex justify-around items-center mb-[25px]' key={item.id}>
          <img className='h-[50px] w-[50px] rounded-full' src={item.image} alt="" />
          <div className='flex min-w-[200px] flex-col justify-center items-start'>
            <p className='overflow-hidden truncate'>{item.name}</p>
            <p>R$ {item.price}</p>
          </div>
          <FaTrashCan className='cursor-pointer' onClick={() => {dispatch({type:'REMOVE_FROM_CART', payload: item})}} />

        </div>
      )}
    </>
  )
}
