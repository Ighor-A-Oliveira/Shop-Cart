import React from 'react'
import { CartState } from '../Context/Context'
import SingleProduct from '../Components/SingleProduct'
import Filters from '../Components/Filters'

export default function Home() {
    const {state: {products},productState: { byFastDelivery, sort, byRating, searchQuery }} = CartState()
    console.log(products)

    /* need to study this further */
    function transformProducts(){
        let sortedProducts = products;
        if(sort) {
            sortedProducts = sortedProducts.sort((a,b) => (
                sort==='lowToHigh' ? a.price-b.price : b.price-a.price
            ))
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >= byRating
            );
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    }

  return (
    <div className='flex justify-between lg:justify-around w-full overflow-x-hidden pt-[80px]'>
        <Filters/>
        <div className='flex justify-around w-full md:w-[70%] flex-wrap'>
            {
                transformProducts().length > 0 ? 
                (
                    transformProducts().map((prod) => {
                        return <SingleProduct key={prod.id} prod={prod}/>
                    })
                )
                :
                <h1 className='mt-[20px] text-2xl'>No Products Found</h1>
            }
        </div>
    </div>
  )
}
