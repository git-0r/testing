import React from 'react';
import { useState } from 'react';
import './App.css';
import axios from "axios";


const App = () => {

const[values,setValues]=useState({
    name:'',
    photo:'',
    email:'',
    mno:'',
    error:'',
    success:false,
    formData:new FormData()
})

const {name,formData,photo,email,mno,error,success}=values 

const onHandleChange=name=>event=>{
    const value=(name==='photo') ? event.target.files[0] : event.target.value;
    formData.set(name,value);
    console.log(value)
    setValues({...values,[name]:value})
}


    const api=(data)=>{
        return fetch('http://localhost:4000/userdashboard',{
            method:"POST",
            body:data
        }).then(response=>response.json()).catch(err=>console.log(err))
    }
    const submitFunction = (e)=>{e.preventDefault();  
    const formData = Object.fromEntries(new FormData(e.target));
        console.log(formData)}

    return (
        <div className="main">
            <h2>ASSIGNMENT</h2>
<div className="container" id="container">
  
  <div className="form-container personal-in-container">
    <form onSubmit={(e)=> submitFunction(e)}>
      <input type="text" onChange={onHandleChange('name')} placeholder="Name" />
      <input type="email" onChange={onHandleChange('email')} placeholder="Email" />
      <input type="number" onChange={onHandleChange('mno')} placeholder="Roll No." />
      <input type="number" onChange={onHandleChange('mno')} placeholder="Phone No." />
      <input type="file" onChange={onHandleChange('photo')} placeholder="Question1" />
      <input type="file" onChange={onHandleChange('photo')} placeholder="Question2" />
      <input type="file" onChange={onHandleChange('photo')} placeholder="Question3" />
      
      <button onClick={()=>console.log(JSON.stringify(formData), values)}>Submit</button>
    </form>
  </div>
  
</div>

{success && (
    <div style={{color:'black'}}>
        <h2>Your Assignment Succesfully saved</h2>
        <h2>Refresh to Submit another Response!</h2>
    </div>
)}

{error && (
    <div style={{color:'black'}}>
        <h1>{error}</h1>
    </div>
)}

        </div>
    )
}

export default App
