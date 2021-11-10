import React,{useState} from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUsers = (props)=>{
     const [enteredUsername ,setEnteredUsername]=useState('');
     const [enteredAge ,setEnteredAge]=useState('');
     const[error ,setError]=useState('');

     const addUserHandler=(event)=>{
         event.preventDefault();
         if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
             setError({
                 title:"Invalid input",
                 message:"Please enter valide data "
             })
             return;
         }
         if(+enteredAge<1){
            setError({
                title:"Invalid input",
                message:"Please enter valide data"
            })
             return;
         }
        props.onAddUser(enteredUsername,enteredAge);
         setEnteredUsername('');
         setEnteredAge('');

     };

     const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
     } 

     const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
       
    } 

    const errorHandler=()=>{
      setError(null);
    }

    return(
        <div>
          
       {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
   <form onSubmit={addUserHandler}>
       <label htmlFor='username'>UserName</label>
       <input  id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}></input>

       <label htmlFor='age'>Age</label>
       <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>

       <Button type='submit'>AddUser</Button>
   </form>
   </Card>
   </div>
    );
};
export default AddUsers;