import React from 'react';
import { useHistory } from 'react-router';

const TransportCard = (props) => {
    const { name, image,id } = props.transport;
    let history=useHistory();
    const handleClick = ()=>{
        const url =`transport/${id}`;
        history.push(url);
    }
    return (
        <div>
            <div onClick={()=>handleClick(id)} className="card " style={{width:" 15rem",marginLeft:"30px",marginTop:"150px"}}>
                <img style={{height:"200px",width:"200px",padding:"20px"}} src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1>{name}</h1>
                    </div>

            </div>
        </div>
    );
};

export default TransportCard;