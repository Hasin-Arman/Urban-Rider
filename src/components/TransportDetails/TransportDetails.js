import React from 'react';
import { useParams } from 'react-router';

const TransportDetails = () => {
    const{transportId}=useParams();
    return (
        <div>
            <h1>This is Tranport Id:{transportId}</h1>
        </div>
    );
};

export default TransportDetails;