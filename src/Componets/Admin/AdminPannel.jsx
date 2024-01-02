import React from 'react'
import NavBar from '../NavBar'
import Home from '../Home'
import AddBooks from './AddBooks'
import Books from '../Books'
import Users from './Users'
import AddUsers from './AddUsers'
import { Route, Routes } from 'react-router-dom'
import ReadBook from '../ReadBook'


const AdminPannel = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/add_users' element={<AddUsers/>}/>
        <Route path='/add_books' element={<AddBooks/>}/>
        <Route path='/books/:id' element={<ReadBook/>}/>

      </Routes>
    </div>
  )
}

export default AdminPannel