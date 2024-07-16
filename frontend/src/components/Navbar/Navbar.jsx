import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <nav>
                <div className="outer">
                    <div className="logo">
                        <Link to='/'>Hummy</Link>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#9776;
                    </div>
                </div>
                <div className={`links ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to='/workouts'><p className='l1' onClick={()=>setIsOpen(false)} >Workouts</p></Link></li>
                        <li><Link to='/workout'><p className='l1' onClick={()=>setIsOpen(false)}>Add workout</p></Link></li>
                        <li><Link to='/signup'><p className='l' onClick={()=>setIsOpen(false)}>SignUp</p></Link></li>
                        <li><Link to='/signin'><p className='l' onClick={()=>setIsOpen(false)}>SignIn</p></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
