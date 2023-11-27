import React from 'react'
import Navbar from './Navbar'
import './index.css'
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io"
import { useDispatch, useSelector } from 'react-redux'
import { addMobile, removeMobile } from './redux/cartSlice'
import { toggleFromWishList } from './redux/wishListSlice'

const mobiles = [
    {name : 'Realme 5',  price:17999, rating:'4.2'},
    {name : 'Realme 5 pro',  price:18999, rating:'4.1'},
    {name : 'Oppo 7',  price:15000, rating:'4.3'},
    {name : 'Samsung G54',  price:12000, rating:'3.5'},
    {name : 'Redmi 42',  price:10000, rating:'5.0'},
    {name : 'micromax N76',  price:12999, rating:'4.0'},
    {name : 'Vivo V25',  price:14999, rating:'4.8'},
    {name : 'Vivo v7',  price:11999, rating:'4.9'},
    {name : 'Realme 7 pro',  price:22999, rating:'4.2'},
    {name : 'Nokia a34',  price:16999, rating:'4.3'},
    {name : 'iQOO z6',  price:13999, rating:'4.0'},
    {name : 'MS D7',  price:15999, rating:'5.0'},
    {name : 'Lava Agni 2',  price:17999, rating:'3.0'},
  ]


function CartApp() {
  const wishList = useSelector(state=> state.wishListState.wishList)
  const dispatch = useDispatch()
  return (
    <div>
        <Navbar/>
        <div className='container pt-5'>
            <div className='row pt-5'>
            {mobiles.map((mobile, index)=> 
                <div key={index} className='card-item'>
                  <button type="button" onClick={()=> dispatch(toggleFromWishList(mobile))} className='heart-button'>       
                    { wishList.some(favMobile=> favMobile.name===mobile.name)
                    ? <IoIosHeart className='red-heart'/> : <IoIosHeartEmpty/>}
                  </button>
                <div className='mobile mb-2'>
                  <span className='camera'>○</span>
                </div>
                <h6>{mobile.name}</h6>
                <h6><span className='rating'>&#9733; </span>{mobile.rating}
                      &nbsp; -  &nbsp;  
                        <span className='price'>&#8377; {mobile.price}</span>  </h6>
                <div>
                  <button className='btn btn-outline-primary m-2' onClick={()=> dispatch(addMobile(mobile))}> Add</button>
                  <button className='btn btn-outline-secondary' onClick={()=> dispatch(removeMobile(mobile))}>Remove</button>
                </div>
                </div>
            )}
            </div>

        </div>
    </div>
  )
}

export default CartApp