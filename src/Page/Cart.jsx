import React from 'react'
import { CartState } from '../Context/Context'
import { useNavigate } from 'react-router-dom'
import Rating from '../Components/Rating';
import { TiPlus } from "react-icons/ti";
import { FiMinus } from "react-icons/fi";



export default function Cart() {
    const {state: {cart},dispatch } = CartState()

    const totalPrice = cart.reduce((somaTotal, itemAtual) => {
        return somaTotal + Number(itemAtual.price) * itemAtual.qty;
    }, 0);

    const navigate = useNavigate();


    console.log(cart)
  return (
    <div className='pt-[100px] flex flex-col justify-start items-center md:flex-row md:justify-around md:items-start h-screen w-screen'>
        <div className='w-[90%] md:w-[70%] h-full overflow-y-auto pb-[25px]'>
            {
                cart.length > 0 ?
                    (cart.map((item) => (
                    <div className='flex md:justify-around items-center p-2 px-4 border-1 border-gray-200 h-[150px] w-full' key={item.id}>
                        <img className='w-[125] h-[100px] md:w-[150px] md:h-[125px] mr-[12px] md:mr-0' src={item.image} alt="" />
                        <div className='md:flex md:items-center md:justify-around w-[90%]'>
                            <h1 className='w-[205px] overflow-ellipsis truncate text-md md:text-lg'>{item.name}</h1>
                            <h1 className='w-[100px] overflow-ellipsis truncate text-sm md:text-lg my-[8px]'>R$ {item.price}</h1>
                            <span className='hidden md:block'>
                                <Rating rating={item.ratings}/>
                            </span>
                            <div className='w-[150px] md:w-[100px] flex items-center justify-center border-gray-200 border-1 p-2 hover:border-black rounded-md cursor-pointer' >
                                <FiMinus className='hover:bg-gray-200 rounded-md select-none' onClick={ () => {dispatch({type:'DECREMENT_CART_QTY',payload:item})}}/>
                                <h1 className='px-[50px] md:px-[25px]'>{item.qty}</h1>
                                <TiPlus className='hover:bg-gray-200 rounded-md select-none' onClick={ () => {dispatch({type:'INCREMENT_CART_QTY',payload:item})}}/>
                            </div>
                        </div>
                    </div>
                )))
                :
                (
                    <div className='flex justify-start items-center p-2 px-4 border-1 border-gray-200 h-[150px] w-full'>
                        <div className='ml-[50px] w-[90%]'>
                            <h1 className='w-[205px] overflow-ellipsis truncate text-md md:text-lg text-2xl'>Your Cart is Empty!</h1>
                        </div>
                    </div>
                )
            }
        </div>
        <div className='w-[90%] md:w-[25%] h-[250px] md:h-[97%] my-[25px] md:my-[0px] bg-black text-white p-4 py-6'>
            <h1 className='text-2xl '>Subtotal ({cart.length}) Items</h1>
            <h4 className='text-lg font-bold my-[20px]'>Total: R$ {(totalPrice.toFixed(2))}  </h4>
            <button
                className={`w-full py-2 rounded-sm cursor-pointer ${
                    cart.length === 0
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-blue-600 text-white"
                }`}
                disabled={cart.length === 0}
                onClick={() => {
                        navigate("/checkout"); // use useNavigate
                }}
            >
                Proceed to checkout
            </button>
        </div>
    </div>
  )
}
