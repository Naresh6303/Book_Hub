import React, { useEffect, useState } from 'react'
import '../Styles/Books.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Books = () => {

  const [books, setBooks] = useState([])

  const books_length = books.length

  const navigate = useNavigate()

  const location  = useLocation()
  const path = location.pathname.startsWith('/admin_pannel')

  useEffect(() => {
    let fetchData = async () => {
      let res = await fetch('http://localhost:5002/books')
      const data = await res.json()
      setBooks(data)
    }
    fetchData()
  },[books])

  const readBook = (id) => {
    if(path){
      navigate(`/admin_pannel/books/${id}`)
    }
    else{
      navigate(`/user_portal/books/${id}`)
    }
  }

  let handleDelete = (id , title)=>{
    fetch(`http://localhost:5002/books/${id}` , {
      method:'DELETE'
    }).then(()=>{
      console.log(`${title} got deleted`)
      alert(`${title} got deleted`)
    })
  }

  return (
    <div className="books_list">
            <h2 className='books_title'>Book Collection <sup className='bookLength'>{books_length}</sup></h2>
      {books.map((data) => {
        return (
          <>
            <div className="booksCont">
              <div className="books_container">
                <div className='books'>
                  <img className='bookImg' src={data.thumbnailUrl} alt="" />
                </div>

                <div className="btns">
                  <div>
                    <h3 className='title_property'><span className="title_keys">Title :</span> {data.title}</h3>
                    <h3 className='title_property'> <span className="title_keys">Author :</span> {data.authors}</h3>
                    <h3 className='title_property'> <span className="title_keys">Categories :</span> {data.categories}</h3>
                    <h3 className='title_property'><span className="title_keys">Pages :</span> {data.pageCount}</h3>
                  </div>
                  <div className="btnOne">
                    <button className='btn1' onClick={() => readBook(data.id)}>Read Book</button>
                    {path? <button className='btn2' onClick={()=>{handleDelete(data.id , data.title)}}>Delete</button>:''}

                  </div>
                </div>

              </div>
            </div>

          </>
        )
      })}
    </div>
  )
}

export default Books