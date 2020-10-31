import React ,{useState,useEffect}from 'react';

function Booking(props){
   
    return(
        <div className="card">
            <div className="card-header bg-primary"><h6 className="title">Booking</h6></div>
            <div className="card-body">
            <p> Movie :  {props.movie_name}</p>
            <label>Tickets</label>
            <input type="number" className="form-control" defaultValue="1"></input>
           <p>{props.theatre}</p>
            <br/>
            <button className="btn btn-outline-primary">Pay</button>
            </div>
        
        </div>
    )
}
export default Booking;