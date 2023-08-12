import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import a from '../assets/Images/a.png';
import i from '../assets/Images/i.png';
import './Header.css'

const Header = () => {

  const [profile, setProfile] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/studentProfileEmail?stuUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])

    const {user, logOut} = useContext(AuthContext);
    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])
    
    console.log(users)



    return (
        <div>
            <div className="navbar bg-green-200">

  <div className="navbar-start">
    <div className="dropdown">
      {/* lg:hidden */}
      <label tabIndex={0} className="btn btn-ghost ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {/* <li><Link to='/'>Home</Link></li> */}
      <li>
                            {
                                users.map((a) =><div className='d-flex' key={a._id}>
                                
                               
                                <>
                                {   a?.role === 'admin' ? <Link className='blog-container' to='/admin'>Admin-Dashboard</Link>
                                    :
                                    a?.role === 'student' && <Link className='blog-container' to='/studentProfile'>Student-Profile</Link>
                                    
                                }
                                </>
                                    </div>)
                            }

    </li>
    <li>
                            {
                                users.map((a) =><div className='d-flex' key={a._id}>
                                
                               
                                <>
                                {   a?.role === 'admin' ? <Link className='blog-container' to='/addservice'>Add-Services</Link>
                                    :
                                    a?.role === 'student' && <Link className='blog-container' to='/studentProfile'>Applied</Link>
                                }
                                </>
                                    </div>)
                            }

    </li>

        <li><Link to='/services'>Services</Link></li>

        
      

        <li>
            {
              user?.uid ?
                <>
                    <Link className='blog-container btn-lout' onClick={handleLogOut}>Log out</Link> 
                </>
                :
                <>
                  <Link className='blog-container header-option1' to='/login'>Login</Link>
                </>
            }
      </li>
        <li className='user-img'><div  to="/profile">
                            {user?.photoURL ?
                                
                                <p className='user'>
                                 <p className='name'>{user?.displayName}</p>
                                <img className='header-image'
                                    src={user?.photoURL}>
                                </img> 
                                
                                </p>
                                : 
                                <>
                                
                                <p className='user'>
                                  {users &&
                                    users.map((a) => (
                                      <p className='name'>
                                        {a.name}
                                        
                                      </p>
                                    ))}
                                    {profile &&
                                    profile.map((l) => (
                                      <p className='name'>
                                        <img className='user-img-p' src={l.uImage} alt="" />
                                        
                                      </p>
                                    ))}
                                </p> 
                                </>
                                
                            }
                            </div>
                         </li> 
      </ul>
    </div>
    <img className='nav-img' src={i} alt="" />
  </div>

  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {/* <li><Link to='/'>Home</Link></li> */}
    <li>
                            {
                                users.map((a) =><div className='d-flex' key={a._id}>
                                
                               
                                <>
                                {   a?.role === 'admin' ? <Link className='blog-container' to='/admin'>Admin-Dashboard</Link>
                                    :
                                    a?.role === 'student' && <Link className='blog-container' to='/studentProfile'>Student-Profile</Link>
                                }
                                </>
                                    </div>)
                            }

    </li>

    <li>
                            {
                                users.map((a) =><div className='d-flex' key={a._id}>
                                
                               
                                <>
                                {   a?.role === 'admin' ? <Link className='blog-container' to='/addservice'>Add-Services</Link>
                                    :
                                    a?.role === 'student' && <Link className='blog-container' to='/studentProfile'>Applied</Link>
                                }
                                </>
                                    </div>)
                            }

    </li>

    <li><Link to='/services'>Services</Link></li>
    
     
      <li>
            {
              user?.uid ?
                <>
                    <Link className='blog-container btn-lout' onClick={handleLogOut}>Log out</Link> 
                </>
                :
                <>
                  <Link className='blog-container header-option1' to='/login'>Login</Link>
                </>
            }
      </li>

                        <li className='user-img'><div  to="/profile">
                            {user?.photoURL ?
                                
                                <p className='user'>
                                 <p className='name'>{user?.displayName}</p>
                                <img className='header-image'
                                    src={user?.photoURL}>
                                </img> 
                                
                                </p>
                                : 
                                <>
                                
                                <p className='user'>
                                  {users &&
                                    users.map((a) => (
                                      <p className='name'>
                                        {a.name}
                                        
                                      </p>
                                    ))}
                                    {profile &&
                                    profile.map((l) => (
                                      <p className='name'>
                                        <img className='user-img-p' src={l.uImage} alt="" />
                                        
                                      </p>
                                    ))}
                                </p> 
                                </>
                                
                            }
                            </div>
                         </li> 
    </ul>
    
  </div>

  
</div>
        </div>
    );
};

export default Header;

