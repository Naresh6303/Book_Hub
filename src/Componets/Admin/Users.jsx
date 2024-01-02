import React, { useEffect, useState } from 'react'
import '../../Styles/User.css'

const Users = () => {
  const [user , setUser] = useState([])

  useEffect(()=>{
   const addUser = async ()=>{
    const res =  await fetch('http://localhost:5002/users')
    const data = await res.json()
    setUser(data)
   }
   addUser()
  },[user])
  return (
    <div className="users">
      <h2 className='user_title'>Users</h2>
      <div>
        {user.map((data , id)=>{
          return(
            <>
              <h4>{id+1}</h4>
              <div> <h4>Name : </h4>{data.name}</div>
              <div> <h4>Mobile : </h4>{data.mobile}</div>
              <div> <h4>Email : </h4>{data.email}</div>
              <div> <h4>Password : </h4>{data.pswd}</div>
              <hr />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Users