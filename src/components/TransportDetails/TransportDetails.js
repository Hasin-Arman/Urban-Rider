import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import transportData from '../../data/data.json';
import map from '../../images/Map.png';
import { Link } from 'react-router-dom';
import TransportDetailsResult from '../TransportDetailsResult/TransportDetailsResult';



const TransportDetails = () => {
    const[form,setForm]=useState(true);
    const{transportId}=useParams();
    const [transports,setTransports]=useState([]);
    useEffect(()=>{
        setTransports(transportData);

    },[]);

   const result =transports.find(transport=>transport.id==transportId);
 
   console.log(result)

    const handleBlur=(event)=>{
        console.log(event.target.name,event.target.value)
    }

    return (
        <div className="container">
            <Header></Header>
    
{  form?     (  <div className="row">
            <div className="col-md-5">
            
                <h3>Pick Form</h3>
                <input type="text" onBlur={handleBlur} name="pickUp" id=""/>
                <br/>
                <h3>Pick To</h3>
                <input type="text" onBlur={handleBlur} name="pickTo" id=""/>
                <br/>
                <br/>
                <button onClick={()=>setForm(false)} className="btn btn-info">search</button>
            
            </div>
            <div className="col-md-7">
                <img style={{height:"550px"}} src={map} alt=""/>
            </div>
        </div>):<TransportDetailsResult result={result}></TransportDetailsResult>}
        </div>
    );
};

export default TransportDetails;