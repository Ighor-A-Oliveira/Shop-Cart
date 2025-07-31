//import React, { useEffect } from 'react'
import Rating from './Rating'
import { CartState } from '../Context/Context'

export default function SingleProduct({key, prod}) {

    const {state: {cart}, dispatch,} = CartState()
    //useEffect(() => {console.log(cart)},[cart])

  return (
    <div className='max-w-[30%] m-[10px] border-gray-50 duration-300  border-1 shadow-md hover:shadow-2xl pb-[15px]' key={key}>
        <div>
            <img src={prod.image} alt={prod.name} />
            <div className='ml-[10px]'>
                <h1 className='text-xl'>{prod.name}</h1>
                <div className='pb-[10px]'>
                    <span>R$ {prod.price.split(".")[0]}</span>
                    {prod.fastDelivery ?
                        <div>Fast Delivery</div>
                        :
                        <div>4 Day Delivery</div>
                    }
                    <Rating rating={prod.ratings}/>
                </div>
                {
                    cart.some(p => p.id===prod.id) 
                        ?
                        <button className='p-2 bg-red-500 outline-red-700 outline-1 rounded-sm text-white cursor-pointer hover:bg-red-400'
                            onClick={ () => {dispatch({type:'REMOVE_FROM_CART',payload:prod})}}
                        >
                            Remove From Cart
                        </button>
                        :
                        <button className='p-2 bg-blue-500 outline-blue-700 outline-1 rounded-sm text-white cursor-pointer hover:bg-blue-400' disabled={!prod.inStock}
                            onClick={ () => {dispatch({type:'ADD_TO_CART',payload:prod})}}
                        >
                            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                        </button>
                }
            </div>
        </div>
    </div>
  )
}
