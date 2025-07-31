import React from 'react'

export default function CartList({cart}) {
    
  return (
    <>
      {cart.map((item) => 
        <h1 key={item.id}>{item.name}</h1>
      )}
    </>
  )
}
