import React from 'react';
import transport from '../../data/data.json'
import './Home.css'
import { useEffect, useState } from 'react';
import TransportCard from '../TransportCard/TransportCard';
import Header from '../Header/Header';



const Home = () => {
    const [transports, setTransports] = useState([]);
    useEffect(() => {
        setTransports(transport);
    }, [])
    return (
        <div>
            <Header></Header>
           <div className="container">
               <div className="row">
                   
                   {
                    transports.map(transport=><TransportCard transport={transport}></TransportCard>)
                   }
               

               </div>

           </div>
        </div>
    );
};

export default Home;