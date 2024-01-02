import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../Styles/ReadBook.css'

const ReadBook = ({cart , setCart}) => {

  const [book , setBook] = useState([])

 const params =  useParams()
 const book_id = params.id

 const navigate = useNavigate()

 const location = useLocation()
 const path = location.pathname.startsWith('/user_portal')

 const navi_gate = ()=>{
  if(path){
    navigate('/user_portal/books')
  }
  else{
    navigate('/admin_pannel/books')
  }
 }

 const Add_Fav = ()=>{
  setCart([...cart , book])
    alert('Added to favourites')
 }

  useEffect(()=>{
     const fetchBook = async()=>{
      const response = await fetch(`http://localhost:5002/books/${book_id}`)
      const data = await response.json()
      setBook(data)
    }
    fetchBook()
  })


  return (
    <div>
        <h2 className='read_title'>Read Book</h2>
        <div className="card_2">
        <div className="card">
          <div className="read_img">
            <img className='read_thumbnile' src={book.thumbnailUrl} alt="" />
          </div>

          <div className='description'>
            <div className='s_title'>Short Description : </div>
            <div className='short_desc'>{book.shortDescription}</div>

            <div className='l_title'>Long Description :</div>
            <div className='long_desc'>{book.shortDescription}</div>
           <div className="add_readBtn">
           <button className='read_btn' onClick={()=>{navi_gate()}}>Back</button>
            <div className="add_btn">
            {path && <button onClick={Add_Fav} className='read_add_fav_btn'>Add to Favourites</button>}
            </div>
           </div>
            

          </div>

        </div>
        </div>
        
    </div>
  )
}

export default ReadBook