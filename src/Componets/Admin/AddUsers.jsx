import React, { useRef } from 'react'
import '../../Styles/AddUser.css'


const AddUsers = () => {

  const name = useRef()
  const email = useRef()
  const mbl = useRef()
  const pswd = useRef()
  const con_pswd = useRef()

  const handleSubmit = (e)=>{
    e.preventDefault()

    const user = {
      name:name.current.value,
      mobile:mbl.current.value,
      email:email.current.value,
      pswd:pswd.current.value,
      con_pswd:con_pswd.current.value
    }

    fetch('http://localhost:5002/users' ,{
      method:'POST',
      headers:{'Content-Type' : 'application/json'},
      body:JSON.stringify(user)
    })
    
    alert('user added')
  }
  return (
    <div>
      <h3 className='adduser_title'>AddUsers</h3>

      <div className='adduser'>
        <div className="addUserForm">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input className='addUser_input' required type="text" placeholder='Enter Username' ref={name}/>
          </div>

          <div>
            <input className='addUser_input' required type="email" placeholder='Enter Email address' ref={email}/>
          </div>

          <div>
            <input className='addUser_input' required type="text" placeholder='Enter Mobile number' ref={mbl}/>
          </div>

          <div>
            <input className='addUser_input' required type="password" placeholder='Enter Password' ref={pswd}/>
          </div>

          <div>
            <input className='addUser_input' required type="password" placeholder=' Confirm Password' ref={con_pswd}/>
          </div>

          <div>
            <button>Add User</button>
          </div>
        </form>
        </div>
      </div>
    </div>
    
  )
}

export default AddUsers