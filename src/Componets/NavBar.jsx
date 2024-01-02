import React from 'react'
import '../Styles/NavBar.css'
import { Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const NavBar = () => {

  const location = useLocation()
  const path = location.pathname.startsWith('/admin_pannel')

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <h2><Link className='logoLink' to='/admin_pannel/'>Buy Knowledge</Link></h2>
        </div>
        <div >
          {/* <Link className="links" to={location.pathname.startsWith('/admin_pannel')?'/admin_pannel/':'/user_portal/'}>Home</Link>
          <Link className="links" to={location.pathname.startsWith('/admin_pannel')?'/admin_pannel/books':'/user_portal/books'}>Books</Link>
          {location.pathname.startsWith( "/admin_pannel") && <Link className="links" to='/admin_pannel/users'>Users</Link>}
          {location.pathname.startsWith( "/admin_pannel") && <Link className="links" to='/admin_pannel/add_books'>Add Books</Link>}
          {location.pathname.startsWith( "/admin_pannel") && <Link className="links" to='/admin_pannel/add_users'>Add Users</Link>}
          <Link className='logout' to={location.pathname.startsWith('/admin_pannel')?'/admin_log':'/user_log'}>Logout</Link> */}

          {path ? 
            <div>
              <Link  className="links" to='/admin_pannel/'>Home</Link>
              <Link  className="links" to='/admin_pannel/books'>Books</Link>
              <Link  className="links" to='/admin_pannel/users'>Users</Link>
              <Link  className="links" to='/admin_pannel/add_books'>Add Books</Link>
              <Link  className="links" to='/admin_pannel/add_users'>Add Users</Link>
              <Link  className="logout" to='/admin_log'>Logout</Link>
            </div> 
              : 
            <div>
              <Link  className="links" to='/user_portal/'>Home</Link>
              <Link  className="links" to='/user_portal/books'>Books</Link>
              <Link  className="links" to='/user_portal/favourites'>Favourites</Link>
              <Link  className="logout" to='/user_log'>Logout</Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar