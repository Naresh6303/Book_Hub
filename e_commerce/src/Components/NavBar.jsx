import React from 'react'
import '../Style/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="flex">
                    <div className="log">
                    <div >
                       <h1> <Link className='logo' to='/'>E_Commerce</Link></h1>
                    </div>
                    </div>

                   <div className="links">
                   <div>
                        <Link className='navLinks' to='/'>Home</Link>
                    </div>

                    <div>
                        <Link className='navLinks' to='/cart'>Cart</Link>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar