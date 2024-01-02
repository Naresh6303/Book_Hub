import React, {useRef } from 'react'
import '../../Styles/AddBook.css'

const AddBooks = () => {

  const title = useRef()
  const thumbnailUrl = useRef()
  const authors = useRef()
  const pageCount = useRef()
  const categories = useRef()
  


    const handleSubmit = (e)=>{
      e.preventDefault()

      let book = {
        title:title.current.value,
        thumbnailUrl:thumbnailUrl.current.value,
        authors:authors.current.value,
        pageCount:pageCount.current.value,
        categories:categories.current.value
      }
      fetch('http://localhost:5002/books' , {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book),
      })
      .then(()=>{
        console.log('success')
        alert('Data submitted successfully')
      })
      .catch((error)=>{console.log(error)})
    }
    
  
  return (
    <div className="addBooks">
      <h2 className='addbook_title'>Add Books</h2>

     <div className="form_flex">
     <div className="addbook_form">
     <form action="" onSubmit={handleSubmit}>
        <div >
          <div className='lab'>
          <label  htmlFor="">Title :</label>
          </div>
          <input className="inp" required type="text" ref={title}  placeholder='Add the Title of the Book'/>
        </div>

        <div>

        <div className='lab'>
          <label  htmlFor="">Thumbnile :</label>
          </div>

          <input className="inp" required type="text" ref={thumbnailUrl}  placeholder='Add Thumbline Url'/>
        </div>

        <div >

        <div className='lab'>
          <label  htmlFor="">Authors :</label>
          </div>

          <input className="inp" required type="text" ref={authors}  placeholder='Add the Authors Name'/>
        </div>

        <div>

        <div className='lab'>
          <label  htmlFor="">Page Count :</label>
          </div>

          <input className="inp" required type="text" ref={pageCount} placeholder='Add Pages of the Book'/>
        </div>

        <div >

        <div className='lab'>
          <label htmlFor="">Categories :</label>
          </div>

          <input className="inp" required type="text" ref={categories}  placeholder='Add Categories of the Book'/>
        </div>

        <div className='addBook_btn'>
          <button className='addform_btn'>Add Book Details</button>
        </div>
      </form>
     </div>
     </div>
    </div>
  )
}

export default AddBooks