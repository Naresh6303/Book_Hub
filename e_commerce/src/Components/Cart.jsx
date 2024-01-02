import React, { useState } from 'react'

const Cart = ({ cart, setCart }) => {

  const subTotal = cart.reduce((sum, x) => {
    return sum + x.price * 70 *0.9
  }, 0)

  return (
    <div>
      <h2>Cart</h2>
      <div>{cart.map((data) => {
        return (
          <>
            <div className="cart">
              <div className="product_container">

                <div className='img_container'>
                  <img className='prodct_img' src={data.thumbnail} alt="" />
                </div>

                <div className="product_content">
                  <h3 className='brandName'>{data.brand}</h3>
                  <p className="description">
                    {data.description}
                  </p>

                  <div className="price">
                    <small>&#x20B9;</small>
                    <span className='priceProduct'>{data.price * 70 * 0.9}</span> &nbsp;
                    <span className='mrp'>M.R.P</span> &nbsp;
                    <strike>{data.price * 70}</strike> &nbsp;
                    <span>(10% off)</span>
                  </div>
                </div>

              </div>
            </div>
          </>
        )
      })}
        <div>subTotal : Rs.{subTotal}</div>
      </div>
    </div>
  )
}

export default Cart