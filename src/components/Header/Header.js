import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import banner from '../../images/Urban Riders.png'
const Header = (props) => {
  const[loggedInUser,setLoggedInUser]= useContext(userContext);
  console.log(loggedInUser);
    let history =useHistory();
    const handleClick =()=>{
        const url ='/signin';
        history.push(url);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img style={{ width: "250px", padding: "20px" }} src={banner} alt="" />
                </div>
                <div className="col-md-8">
                    <ul className="nav justify-content-end mt-2">
                        <li className="nav-item">
                        <Link style={{color:"black",marginRight:"20px"}} to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link style={{color:"black",marginRight:"20px"}} to="/transport/1">Destination</Link>
                        </li>
                        <li className="nav-item">
                        <Link style={{color:"black",marginRight:"20px"}} to="/home">Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link style={{color:"black",marginRight:"20px"}} to="/home">Contact</Link>
                        </li>
                      { loggedInUser.email ?`${loggedInUser.email}`: <li className="nav-item">
                            <button onClick={handleClick} style={{height:"35px",margin:"5px"}} className="btn btn-info">Login</button>
                        </li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;