import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Header from '../components/Header';
import config from '../../config/config';

import { faEye, faUser, faLock, faEyeSlash, faEnvelope, faLockOpen, faExclamationCircle, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Regpage = () => {  

  const nav = useNavigate(); 

  useEffect(() => {
    fetch(`${config.apiUrl}/auth`, {
        method:'GET',
        headers: {
            'Content-Type':'application/json'
        },
        credentials: 'include'
        }).then(res => res.json()) 
        .then(response => {
          if (response.auth === true) {
            nav("/profil"); 
          }
        })
        
    },[nav])

  const [eye1, setEye1] = useState(faEye);
  const [eye2, setEye2] = useState(faEye);

  function hesloToggle() {
    let hesloInput = document.getElementById("hesloInput1");
  
    if (hesloInput.type === "password") {
      hesloInput.type = "type"
      setEye1(faEyeSlash);
    }
  
    else {
      hesloInput.type = "password";
      setEye1(faEye);
    }
  
  }
  
  function hesloToggle2() {
    let hesloInput2 = document.getElementById("hesloInput2");
  
    if (hesloInput2.type === "password") {
      hesloInput2.type = "type";
      setEye2(faEyeSlash);
    }
  
    else {
      hesloInput2.type = "password";
      setEye2(faEye);
    }
  }
  

  const [user, setUser] = useState({ 
    name: "",
    email: "",
    password: "",
    passowrdRep: ""
  });

  const [msg, setMsg] = useState({});
  
  
  const handleChange = (e) => {
    setUser(prev => ({...prev, [e.target.name]: e.target.value})); 
  };

  const handleClick = async e => {   
    e.preventDefault();
   
    fetch(`${config.apiUrl}/register`, {
      method:'POST',
      body: JSON.stringify(user), 
      headers: {
          'Content-Type':'application/json'
      }
      }).then(res => res.json()) 
      .then(response => {
        if (response.message === "You are registered") {
          setMsg(response);
        } else {
          setMsg(response);
        }
      })
      .catch(err => {
          console.log(err);
          alert(err);
      });
  }

  return (
    <div className='container'>
      <Header/>
      <div className="bluredDiv">

        <form onSubmit={handleClick} className='loginReg'>
          <h1>Registration</h1>

          <div className='inputReg'>
            <input 
              className='inputBlueFocus' 
              name="name" 
              type="text" 
              autoComplete="off" 
              onChange={handleChange} 
              placeholder='Enter your name: '/>
            <label><FontAwesomeIcon icon={faUser}/></label>
          </div>
                
          <div className='inputReg'>
            <input 
              className='inputBlueFocus' 
              name="email" 
              type="text" 
              autoComplete="off" 
              onChange={handleChange} 
              placeholder="Enter your email: "/>
            <label><FontAwesomeIcon icon={faEnvelope}/></label>
          </div>

          <div className='inputReg '>
            <input 
              id='hesloInput1' 
              className='inputBlueFocus' 
              name="password" 
              type="password" 
              onChange={handleChange} 
              placeholder="Behind its heslo: "/>
            <label><FontAwesomeIcon icon={faLock}/></label>
            <label id='eye' onClick={hesloToggle}><FontAwesomeIcon icon={eye1}/></label>
          </div>

          <div className='inputReg'>
            <input 
              id='hesloInput2' 
              className='inputBlueFocus' 
              name="passwordRep" 
              type="password" 
              onChange={handleChange} 
              placeholder="Repeat your password: "/>
            <label><FontAwesomeIcon icon={faLockOpen}/></label> 
            <label id='eye2' onClick={hesloToggle2}><FontAwesomeIcon icon={eye2}/></label>
          </div>

          {msg.message ? <label className="loginDangerLabel"><FontAwesomeIcon icon={faExclamationCircle}/> {msg.message}</label> : null }
          {msg.messageGreen ? <label className="loginSucessLabel"><FontAwesomeIcon icon={faThumbsUp}/> {msg.messageGreen}</label> : null }
          <button className='regButton' type="submit">Register</button>

          <div className='mobilReg'>
              <p>If you have an account</p>
              <Link to='/'>Sign in here</Link>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Regpage;
