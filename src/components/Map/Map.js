import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';
const containerStyle = {
    width: '550px',
    height: '550px'
  };
  
  const center = {
    lat: 23.810331,
    lng: 90.412521
  };

const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey=""
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;