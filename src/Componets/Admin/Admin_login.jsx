import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/AdminLogin.css'

const Admin_login = () => {

  const email = useRef()
  const pswd = useRef()

  const navigate = useNavigate()

 const login = (e)=>{
  e.preventDefault()
 
  const admin = {
    email:'naresh@gmail.com',
    pswd:143143
  }

  if (email.current.value === admin.email && parseInt(pswd.current.value) === admin.pswd) {
    const navigateTiming = ()=>{
      navigate('/admin_pannel')
    }
    setTimeout(navigateTiming, 1000);
  }
   else {
    alert('invalid credentials')
  }
 }

  return (
    <>
      <div className="adminLogin">
        <div className="form">
            <div className='admin_log_heading'>
        <h1>Admin Login</h1>
      </div>

      <div className="adminForm">
        <form action="" onSubmit={login}>
          <div className='inputParent'>
            <div className="lable">
              <label>Enter Email :</label>
            </div>
            <input type="email" className='input' ref={email} name='email' placeholder='Enter email address' />
          </div>
          <div className='inputParent'>
          <div className="lable">
              <label>Enter Password :</label>
            </div>
            <input type="password" className='input' ref={pswd} name='pswd' placeholder='Enter password' />
          </div>

          <div className='button'>
          <button className="btnn">Login</button>
          </div>
        </form>
      </div>
        </div>
      </div>
    </>
  )
}

export default Admin_login