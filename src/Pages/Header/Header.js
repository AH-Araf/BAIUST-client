import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import a from '../assets/Images/a.png';
import i from '../assets/Images/i.png';
import './Header.css'

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/email?email==${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])
    // let a = [users.name]
    // console.log(users)


    return (
        <div>
            <div className="navbar  bg-gray-600 text-stone-950">
  <div className="navbar-start ">
    <div className="dropdown lg:hidden">
        {/* lg:hidden */}
      <label tabIndex={0} className="btn btn-ghost ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu bg-gray-600 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
        
      <li className='header-option1'><Link to='/'>Home</Link></li>
      <li className='header-option1'><Link to='/jobs'>Jobs</Link></li>

      <li  tabIndex={0}>
        <Link>
        <span className='header-option1'>Your Job ⬇</span>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="0" height="20" viewBox="0 0 24 24"><path d=""/></svg>
        </Link>
        <ul className="p-2 bg-gray-600">
        <li className='header-option1'><Link to='/applied'>Applied Jobs</Link></li>
      <li className='header-option1'><Link to='/userProfile'>Job Profile</Link></li>
          
          
        </ul>
      </li>




      
      <li  tabIndex={0}>
        <Link>
        <span className='header-option1'>Hire Employees ⬇</span>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="0" height="20" viewBox="0 0 24 24"><path d=""/></svg>
        </Link>
        <ul className="p-2 bg-gray-600">
          <li className='header-option1'><Link to='/addjobs'>Advertise For Jobs</Link></li>
          <li className='header-option1'><Link to='/jobAd'>Added Jobs</Link></li>
          <li className='header-option1'><Link to='/totalApplicant'>Total Applicant</Link></li>
          
          
        </ul>
      </li>
      
      <li tabIndex={0}>
        <Link>
        <span className='header-option1'>Category ⬇</span>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="0" height="20" viewBox="0 0 24 24"><path d=""/></svg>
        </Link>
        <ul className="p-2 bg-gray-600">
          <li className='header-option1'><Link to='/organization'>Organization</Link></li>
          <li className='header-option1'><Link to='/itSupport'>IT Support</Link></li>
          <li className='header-option1'><Link to='/government'>Government</Link></li>
          <li className='header-option1'><Link to='/semiGov'>Semi Government</Link></li>
          <li className='header-option1'><Link to='/ngo'>NGO</Link></li>
          <li className='header-option1'><Link to='/privateFirm'>Private Firm</Link></li>
          <li className='header-option1'><Link to='/agencies'>Agencies</Link></li>
        </ul>
      </li>
                        <li>
                            {
                                user?.uid ?
                                    <>
                                        <Link className='blog-container btn-lout' onClick={handleLogOut}>Log out</Link> 
                                        {/* <Link className='blog-container' to='/myOrder'>My Order</Link> */}
                                    </>
                                    :
                                    <>
                                        <Link className='blog-container header-option1' to='/login'>Login</Link> 
                                    </>
                            }

                        </li>
                        <li className='user-img'><div  to="/profile">
                            {user?.photoURL ?
                                
                                <>
                                <img className='header-image'
                                    src={user?.photoURL}>
                                </img> 

                                 <p className='name'>{user?.displayName}</p>
                                </>
                                

                                : 
                                <>
                                <img className='header-image'
                                    src={a}>
                                </img> 
                                <p>
                                  {users &&
                                    users.map((a) => (
                                      <p className='name'>
                                        {a.name}
                                      </p>
                                    ))}
                                </p> 
                                </>
                                // <span></span>
                            }
                            </div>
                         </li> 

      </ul>
                                
      
    </div>

    <img className='img-header'
                                    src={i}>
                                </img> 
    <h1  className="h-text text-red-600">BD Vacancies</h1>
  </div>










  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      
      <li className='header-option1'><Link to='/'>Home</Link></li>
      <li className='header-option1'><Link to='/jobs'>Jobs</Link></li>
      


      <li  tabIndex={0}>
        <Link>
        <span className='header-option1'>Your-Job ⬇</span>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="0" height="20" viewBox="0 0 24 24"><path d=""/></svg>
        </Link>
        <ul className="p-2 bg-gray-600">
        <li className='header-option1'><Link to='/applied'>Applied Jobs</Link></li>
      <li className='header-option1'><Link to='/userProfile'>Job Profile</Link></li>
          
          
        </ul>
      </li>


      <li  tabIndex={0}>
        <Link>
        <span className='header-option1'>Hire-Employees ⬇</span>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="0" height="20" viewBox="0 0 24 24"><path d=""/></svg>
        </Link>
        <ul className="p-2 bg-gray-600">
          <li className='header-option1'><Link to='/addjobs'>Advertise For Jobs</Link></li>
          <li className='header-option1'><Link to='/jobAd'>Added Jobs</Link></li>
          <li className='header-option1'><Link to='/totalApplicant'>Total Applicant</Link></li>
          
          
        </ul>
      </li>
      
      <li tabIndex={0}>
        <Link>
        <span className='header-option1'>Category ⬇</span>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="0" height="20" viewBox="0 0 24 24"><path d=""/></svg>
        </Link>
        <ul className="p-2 bg-gray-600">
          <li className='header-option1'><Link to='/organization'>Organization</Link></li>
          <li className='header-option1'><Link to='/itSupport'>IT Support</Link></li>
          <li className='header-option1'><Link to='/government'>Government</Link></li>
          <li className='header-option1'><Link to='/semiGov'>Semi Government</Link></li>
          <li className='header-option1'><Link to='/ngo'>NGO</Link></li>
          <li className='header-option1'><Link to='/privateFirm'>Private Firm</Link></li>
          <li className='header-option1'><Link to='/agencies'>Agencies</Link></li>
        </ul>
      </li>
                        <li>
                            {
                                user?.uid ?
                                    <>
                                        <Link className='blog-container btn-lout' onClick={handleLogOut}>Log out</Link> 
                                        {/* <Link className='blog-container' to='/myOrder'>My Order</Link> */}
                                    </>
                                    :
                                    <>
                                        <Link className='blog-container header-option1' to='/login'>Login</Link> 
                                    </>
                            }

                        </li>
                        <li className='user-img'><div  to="/profile">
                            {user?.photoURL ?
                                
                                <>
                                <img className='header-image'
                                    src={user?.photoURL}>
                                </img> 
                                 <p className='name'>{user?.displayName}</p>
                                </>
                                

                                : <>
                                <img className='header-image'
                                    src={a}>
                                </img> 
                                <p>
                                  {users &&
                                    users.map((a) => (
                                      <p className='name'>
                                        {a.name}
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



{/* <Link to='/'>Home</Link>
            <Link to='/publications'>Publications</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link> */}