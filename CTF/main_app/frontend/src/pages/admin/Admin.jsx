import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import AdminNav from '../components/AdminNav';
import config from '../../config/config';

const Admin = () => {

  const nav = useNavigate(); 

  let [levely, setLevely] = useState ( [] )
  let [users, setUsers] = useState ( [] )

  const [id, setID] = useState ( 0 )


  const adminUsers = users.filter(user => user.role === 'admin');
  const playerUsers = users.filter(user => user.role === 'hrac');

  const totalPoints = levely.reduce((sum, currentValue) => {
    return sum + currentValue.points;
  }, 0);

  const userWithMostPoints = playerUsers.reduce((prevUser, currentUser) => {
    return prevUser.points > currentUser.points ? prevUser : currentUser;
  }, playerUsers[0]);
  

  useEffect(() => {
    fetch(`${config.apiUrl}/auth`, {
        method:'GET',
        headers: {
            'Content-Type':'application/json'
        },
        credentials: 'include'
        }).then(res => res.json()) 
        .then(response => {
          if (response.auth !== true && response.user.role !== "admin" ) {
            nav("/"); 
          } else {
            setID(response.user.id)
          }
        })
        
    },[nav])

    useEffect(() => {
      if (id >= 1) { 
        const fetchAllData = async () => {
          try {
            const levelRes = await axios.get(`${config.apiUrl}/admin/level`)
            const userRes = await axios.get(`${config.apiUrl}/admin/user`)
            setLevely(levelRes.data)
            setUsers(userRes.data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchAllData()
      }
    }, [id])

  return (
    <div>
      <AdminNav />
      <div className='content'>
        <h1 style={{textAlign: "center", margin: "0.5rem", letterSpacing: "1px", fontSize: "2.5rem", fontWeight: "50"}}>Mode the web using this interface</h1>

        <div className="spotUpdateRow">

          <div className="updateSmall">
            <h1>Number of users: <i className='info'>{users.length}</i></h1>
          </div>

          <div className="updateSmall">
            <h1>The number of levels: <i className='info'>{levely.length}</i></h1>
          </div>

          <div className="updateSmall">
            <h1>Number of admin: <i className='info'>{adminUsers.length}</i></h1>
          </div>

          <div className="updateSmall">
            <h1>Number of players: <i className='info'>{playerUsers.length}</i></h1>
          </div>

         {userWithMostPoints && userWithMostPoints.points !== 0 ? 
            <div className="updateSmall">
              <h1>The most successful player: <i className='info'>{userWithMostPoints.name}:{userWithMostPoints.points}b</i></h1>
            </div>
                 
          :null}

          <div className="updateSmall">
            <h1>Max number of points: <i className='info'>{totalPoints}</i></h1>
          </div>

        </div>
      </div>

      </div>
  )
}

export default Admin;