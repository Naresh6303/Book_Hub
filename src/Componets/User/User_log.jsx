import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/User_log.css'
const User_log = () => {
  const email = useRef()
  const pswd = useRef()

  const navigate = useNavigate()

 const login = ()=>{
 

      navigate('/user_portal')
   
}
  return (
    <div>

      <div className="adminLogin">
        <div className="form">
            <div className='admin_log_heading'>
        <h1>User Login</h1>
      </div>

      <div className="adminForm">
        <form action="" onSubmit={login}>
          <div className='inputParent'>
            <div className="lable">
              <label>Enter Email :</label>
            </div>
            <input type="email" required className='input' ref={email} name='email' placeholder='Enter email address' />
          </div>
          <div className='inputParent'>
          <div className="lable">
              <label>Enter Password :</label>
            </div>
            <input type="password" required className='input' ref={pswd} name='pswd' placeholder='Enter password' />
          </div>

          <div className='button'>
          <button className="btnn">Login</button>
          </div>
        </form>
      </div>
        </div>
      </div>
    </div>
  )
}

export default User_log