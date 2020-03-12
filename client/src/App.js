import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import UsersForm from './components/UsersForm';
import UsersDisplay from './components/UsersDisplay';

const App = ()=> {

  const [users, setUsers] = useState([])

  const getUsers =()=> {
    console.log("this thing is working")
    axios 
    .get('http://localhost:5000/api/users')
    .then(res => {
      console.log('response from axios', res.data);
      setUsers(res.data);
    })
    .catch(err => {
      console.log(`${err}`)
    });

  };

  return (
    <div className="App">
      <h3>Users API</h3>
      <UsersForm getUsersBtn={getUsers} />
      <UsersDisplay usersDisplay={users} />
    </div>
  );
}

export default App;
