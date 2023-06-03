import React from 'react';
// import MyComponent from './components/Button';
import TransactionRecord from './components/TransactionRecord'
import Navbar from './components/Navbar';
import MapWithSVY21 from './components/MapWithSVY21.js';
import GoogleMapReact from 'google-map-react'

const App = () => {
  return (
    <div>
      "hello"
      <Navbar />
      <TransactionRecord/>
      <GoogleMapReact/>
      <PropertyMap />
    </div>
  );
};

export default App;
