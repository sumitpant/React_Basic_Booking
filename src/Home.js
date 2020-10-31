import React,{useEffect,useState} from 'react'
import './Home.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Movies from './Movies'
function Home(props){
    const[location,setLocation]=useState([]);
    const[city,setCity]=useState("movies");
    
    let temp={}
    useEffect(()=>{
       
        axios.get("/Location.json").then(data=>{
            temp=data.data
            
            setLocation(Object.values(temp))  
               
        }
       
        )
       
    })
    
   
   
    var cit;
    const  selectCity=(e)=>{
         cit= e.target.value
        setCity(cit)
        
        
    }

    const logout=()=>{
       props.history.replace("/")
    }
return(<div className="home_comp">
    <div className="header">
         <div className="logo">
          <h3 style={{color:"#ff29a9"}}>Infy Movies</h3>
        </div>
      <div className="rest">
            <div className="nam"><p><b>Welcome {props.match.params.name}</b></p></div>
            <div><button className="btn btn-primary btn-sm" onClick={logout}>Logout</button>
            </div>
             <div >
                <select className="custom"
                onChange={selectCity}
                 >
                     <option value="movies" > Select Movie</option>
                 {location.map((item,key=0)=>{
                      return(
                     <option value={item.location}>{item.location}</option>)
                   })}
                   </select>
           
      
             </div>
     </div>
</div>
    
    <div className="movieContainer">
        {/* MoviesComponent */}
                {/* <h2>{city}</h2> */}
          <Movies names={city} />
    </div>


</div>)
}
export default Home
