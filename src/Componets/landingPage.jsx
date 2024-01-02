import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/LandingPage.css'
import LibraryIcon from '../images/dall.png'


const LandingPage = () => {
  return (
    <div className='homePage' >
      <div className="dis">
        <div className='border'>
          <div className="landingPage">
            <h1>Buy Knowledge</h1>
          </div>
          <div className="image">
            <img className='img' src={LibraryIcon} alt="" />
          </div>
          <div className="btn">
            <Link  to='/admin_log'>
              <button className="loginoptions">Admin Login</button>
            </Link>
            <Link  to='/user_log'>
              <button  className="loginoptions">User Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage