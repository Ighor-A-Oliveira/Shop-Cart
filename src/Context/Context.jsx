import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import cartReducer from './cartReducer'

const Cart = createContext()
faker.seed(99);

export default function Context({children}) {

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: `https://picsum.photos/seed/${faker.string.uuid()}/300/300`, //faker.image.url(), // formerly faker.random.image()
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));


    //console.log(products)

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export const CartState  = () => {
    return useContext(Cart)
}