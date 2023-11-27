import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const itemsCount  = useSelector(state=> state.cartSate.cartItems.length)
  const totalPrice = useSelector(state=> state.cartSate.totalPrice)
  const wishList = useSelector(state=> state.wishListState.wishList)
  return (
    <header className='bg-dark w-100 d-flex justify-content-center align-items-center p-3'>
        <div className='text-white d-flex  align-items-center p-2'>Cart items : <span className='value-badge cart-list-badge'>{itemsCount}</span></div>
        <div className='text-white d-flex  align-items-center ml-5 mr-5 p-2'>Total Price : <span className='value-badge total-price-badge'>&#8377; {totalPrice}</span></div>
        <div className='text-white d-flex  align-items-center p-2'>Wish List : <span className='value-badge wish-list-badge'>{wishList.length}</span></div>
    </header>
  )
}

export default Navbar