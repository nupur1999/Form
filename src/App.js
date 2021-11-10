import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  
  const[usersList ,setUsersList]=useState([]);
   const addUserHandler=(uName,uAge)=>{
    setUsersList((previous)=>{
      return[...previous,{ name:uName , age:uAge , id: Math.random().toString()}];
    });

   };

  return (
    <div className="App">
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
