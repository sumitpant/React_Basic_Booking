import React, { useState ,useEffect} from 'react';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './Movies.css'
import Booking from './book';

function Movies(props){
    
    const[city,setCity]=useState(props.name)
   
    const[theatre,setTheatre]=useState([]);
     const[movie_name,setMoviename]=useState();
    //  setMovie(props.name)
    
    useEffect(() => {
      
      setCity(props.names)
      
      
      
      axios.get("/"+props.names+".json").then(data=>{
          setTheatre(Object.values(data.data))
        
      }).catch(err=>{console.log("nothing")})
     
  },[theatre])

  const chng=(e)=>{
     
      let name=e.target.value
      //setMoviename([...movie_name ,name])
      setMoviename(name)   
  }

    return(
        
    <div className="titles">
          <div className="card main">
              <div className="card-body str">
                 {theatre.map(data=>{
                     return(
                         <div className="card cs">
                             <div className="card-header">{data.name}</div>
                     <div className="card-body img"> 
                     
                     <div className="imgmain" ><img src={require("./img/bp.jpg")} width="100px" /></div>
                     <div style={{marginTop:"4px"}}>
                       
                     <h5>{data.dates}</h5>
                     <h5>{data.times}</h5>
                     <h5>{data.theatres}</h5>
                     </div>
                     
                     <button className="btn btn-primary" value={data.name} onClick={chng}>Book</button>
                     
                     </div>
                      </div>
                     )
                 })}
              </div>
              

          </div>
          
            
          
          <div className="summary">
            {
              movie_name?<Booking movie_name={movie_name} theatre={city}/>:<p></p>
            }
            
            </div>  
          
          
          
          
    </div>);
   
    
    
}

export default Movies