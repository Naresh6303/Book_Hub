import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Style/Products.css'

const Products = ({cart , setCart}) => {
    const [state , setState] = useState([])

    const params = useParams()
    const id = params.id

    const navigate = useNavigate()
    const useNavgt = ()=>{
      navigate('/')
    }


    useEffect(()=>{
      const product = async ()=>{
          let res = await fetch(`https://dummyjson.com/products/${id}`)
          const data = await res.json()
          setState(data)
      }
      product()
    } , [])

    let addToCart = () => {
      const isProduct = cart.some(item => item.id === state.id);
      if(!isProduct){
        setCart([...cart , state])
        alert(`${state.brand} product is successfully added to the cart`)
      }
      else{
        alert(`${state.brand} product is already added to the cart`)
      }
    };
    

    
  return (
    <div>
      <h3>Products</h3>
      <div className="product_container">

        <div className='img_container'>
          <img className='prodct_img' src={state.thumbnail} alt="" />
        </div>

        <div className="product_content">
          <h3 className='brandName'>{state.brand}</h3>
          <p className="description">
            {state.description}
          </p>

          <div className="product_btns">
            <button className='btn_red' onClick={useNavgt}>Back</button>
            <button className='btn_green' onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Products