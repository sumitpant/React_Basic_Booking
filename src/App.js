import React, { useState ,useEffect } from 'react';
import './Star.css'
import './App.css';
import axios from "axios";

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'


function App(props) {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[arr,setArr]=useState({});
  var info;
  useEffect(() => {
    
    axios.get("./Registration.json").then((data)=>{
        //  setArr(data.data) //Never update a state within useEffect
        info=data.data
        setArr(info)
    })
    
  })
  const fun=(e)=>{
    if(e.target.name==="username"){
      setUsername(e.target.value)
    }
    else{setPassword(e.target.value)}

  }
  const login=(e)=>{
    //setArr(info)
        if(username==='' && password===''){
          alert("Enter UserName And Password");
          
        }
        else if(username===''){
          alert("Enter UserName" );
          
        }
        else if(password===''){
          alert("Enter  Password");
          
        }
        else{
          let flag=true
          
           for(let i=0;i<arr.length;i++)
           {
             console.log(i)
             if(arr[i].username==username){
               flag=false
               if(arr[i].password==password){
                 props.history.replace("/home/"+username)
               }
               else{
                 alert("Incorrect password");
               }
             }
           }
           if(flag){
             alert("No such user")
            //  setUsername('');
            //  setPassword('')
            //  console.log(username)
           }
          

                      
                      

             
        }
  }
  return (
    <div className="App">
      <div className="header">
        <h3 style={{color:"#ff29a9"}}>Infy Movies</h3>
      </div>
      <div className="CardContainer">
              <div className="card border-primary">
                <div className="card-header bg-primary">
                  <h6 className="card-title "> Login</h6>
                </div>
                <div className="card-body">
                  <p className="card-title "> Movies is an online application where you can book tickets<br/>
                    for your favourite movies.Please Login to the application to <br/>
                    grab your movie ticket.
                  </p>
                  <div className="elements">
                   <form >
                     <div className="form-group row ">
                       <label className="col-sm-4 col-form-label">Username:</label>
                       <div className="col-sm-8">
                       <input type="text" className="form-control"  name="username" onChange={fun}/>
                       </div>
                       
                     </div>
                     <div className="form-group row">
                       <label className="col-sm-4 col-form-label">Password:</label>
                       <div className="col-sm-8"> <input  type="password"name="password" className="form-control" onChange={fun} /></div> 
                     </div>
                   </form>
                   <div className="text-center" ><button className="btn btn-primary " onClick={login}>Login</button></div>
                   
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
}

export default App;
