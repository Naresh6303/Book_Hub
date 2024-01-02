import React, { useState } from 'react'
import Home from '../Home'
import Books from '../Books'
import NavBar from '../NavBar'
import {Routes , Route} from 'react-router-dom'
import ReadBook from '../ReadBook'
import Favourites from './Favourites'

const UserPortal = () => {

  const [cart , setCart] = useState([])

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Books/>} path='/books'/>
        <Route path='/favourites' element={<Favourites  cart={cart} setCart={setCart}/>} />
        <Route path='/books/:id' element={<ReadBook cart={cart} setCart={setCart} />}  />

      </Routes>
    </div>
  )
}

export default UserPortal