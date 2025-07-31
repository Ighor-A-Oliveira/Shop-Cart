import React from 'react'
import { CartState } from '../Context/Context'
import SingleProduct from '../Components/SingleProduct'
import Filters from '../Components/Filters'

export default function Home() {
    const {state: {products}} = CartState()
    console.log(products)
  return (
    <div className='flex w-full overflow-x-hidden'>
        <Filters/>
        <div className='flex justify-around w-[70%] flex-wrap'>
            {
                products.map((prod) => {
                    return <SingleProduct key={prod.id} prod={prod}/>
                })
            }
        </div>
    </div>
  )
}
