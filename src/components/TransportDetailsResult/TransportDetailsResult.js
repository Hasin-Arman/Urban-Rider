import React from 'react';
import map from '../../images/Map.png';
import people from '../../images/peopleicon.png'

const TransportDetailsResult = (props) => {
    const { name, image } = props.result;
    return (
        <div className="container">

            <div className="row">
                <div style={{backgroundColor:"tomato",height:"500px",borderRadius:"20px"}}  className="col-md-5">
                    <h3>Mirpur 1</h3>
                    <h4>To</h4>
                    <h3>Dhanmondi</h3>
                    <br/>
                  <div style={{backgroundColor:"lightgray",padding:"10px",borderRadius:"10px",marginBottom:"10px"}} className="d-flex">
                  <img style={{height:"70px",marginRight:"10px"}} src={image} alt=""/>
                    <b>{name}</b>
                    <img style={{height:"25px",marginLeft:"10px"}} src={people} alt=""/>
                    <b style={{marginRight:"10px"}}>4</b>
                    <b>$65</b>
                    <br />
                  </div>
                  <div style={{backgroundColor:"lightgray",padding:"10px",borderRadius:"10px",marginBottom:"10px"}} className="d-flex">
                  <img style={{height:"80px",marginRight:"10px"}} src={image} alt=""/>
                    <b>{name}</b>
                    <img style={{height:"25px",marginLeft:"10px"}} src={people} alt=""/>
                    <b style={{marginRight:"10px"}}>4</b>
                    <b>$65</b>
                    <br />
                  </div>
                  <div style={{backgroundColor:"lightgray",padding:"10px",borderRadius:"10px",marginBottom:"10px"}} className="d-flex">
                  <img style={{height:"80px",marginRight:"10px"}} src={image} alt=""/>
                    <b>{name}</b>
                    <img style={{height:"25px",marginLeft:"10px"}} src={people} alt=""/>
                    <b style={{marginRight:"10px"}}>4</b>
                    <b>$65</b>
                    <br />
                  </div>
                </div>
                <div className="col-md-7">
                   <img style={{height:"550px"}} src={map} alt=""/>
                </div>

            </div>

        </div>
    );
};

export default TransportDetailsResult;