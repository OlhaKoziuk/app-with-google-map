import React from 'react';
import './App.css';
import { Map } from './components/Map';
import { useJsApiLoader } from "@react-google-maps/api";
const API_KEY = process.env.REACT_APP_API_KEY;

const center = {
  lat: 48.4697, 
  lng: 35.0668,
};

const libraries = ['places'];

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <div>
      {isLoaded ? <Map center={center} /> : <h2>Loading</h2>} 
    </div>
  );
};

export default App;