import React, { useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import config from '../../config/config';


const AdminNav = () => {

  
  const nav = useNavigate();

  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = async e => {   
    e.preventDefault();
    
    fetch(`${config.apiUrl}/auth`, {
      method:'DELETE',
      headers: {
          'Content-Type':'application/json'
      },
      credentials: 'include'
      }).then(res => res.json()) 
      .then(response => {
        if (response.logout === true) {
          nav("/"); 
        } 
      })
      .catch(err => {
          console.log(err);
          alert(err);
      });
  }

  return (
    <div className="nav">
        <ul>
          <li className='dropdown'>
            <span className='dropbtn'>Moderation</span>
            <div className='dropdown-content'>
              <Link to="/admin" id={activeLink === '/admin' ? 'adminActive' : ''}>Main menu</Link>
              <Link to="/admin/level/update" id={activeLink === '/admin/level/update' ? 'adminActive' : ''}>levely</Link>
              <Link to="/admin/user/update" id={activeLink === '/admin/user/update' ? 'adminActive' : ''}>Users </Link>
            </div>
          </li>
          <li className='dropdown'>
            <span className='dropbtn'>The road</span>
            <div className='dropdown-content'>
              <Link to="/stats">Statistics</Link>
              <Link to="/domov">Home</Link>
              <Link to="/levely">levely</Link>
              <Link to="/profil">profile</Link>
            </div>
          </li>
          <li className='dropdown'>
            <span className='dropbtn'>Adding</span>
            <div className='dropdown-content'>
              <Link to="/admin/level/add" id={activeLink === '/admin/level/add' ? 'adminActive' : ''}>Level</Link>
              <Link to="/admin/user/add" id={activeLink === '/admin/user/add' ? 'adminActive' : ''}>The user</Link>
              <Link onClick={handleClick}>Sign out</Link>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default AdminNav;