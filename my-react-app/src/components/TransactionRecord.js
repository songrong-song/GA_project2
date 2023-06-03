import React, { useEffect, useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
import Plotly from 'react-plotly.js';
// import "./Price.css";

function TransactionRecord() {
  const url = `https://data.gov.sg/api/action/datastore_search?resource_id=52e93430-01b7-4de0-80df-bc83d0afed40`;
  const [housePriceObj, setHousePrice] = useState([]);
  const [quarters, setQuarters] = useState([]);
  const [indexes, setIndexes] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await fetch(url);
        const json_ = await res.json();
        setHousePrice(json_.result.records);
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    makeApiCall();
  }, []);

  useEffect(() => {
    console.log(housePriceObj)
    var quarters_  = []
    var indexes_ = []
    housePriceObj.map(item => {quarters_.push(item.quarter)})
    setQuarters(quarters_);

    housePriceObj.map(item => {indexes_.push(item.index)})
    setIndexes(indexes_);

    // Perform any necessary data processing here
  }, [housePriceObj]);


  const data = [
    {
      x: quarters,
      y: indexes,
      type: 'scatter',
      mode: 'lines',
      line: { color: 'blue' },
    },
  ];
  
  const layout = {
    width: 1100,
    height: 300,
    title: 'HDB Resale Price Index',
    xaxis: {
      font: {
        size: 5,
      },
      tickfont: {
        size: 12,
        color: 'black'
      },
      tickangle: -45,
      showgrid: false,
    },
    yaxis: {
      title: 'Price Index',
      font: {
        size: 5,
      },
      tickfont: {
        size: 12,
        color: 'black'
      },
      showgrid: false,
    },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    margin: {
      l: 60,
      r: 30,
      b: 60,
      t: 50,
      pad: 4
    },
    font: {
      family: 'Arial, sans-serif',
      size: 14,
      color: '#333333'
    },
  };
  
  return (
    <Plotly data={data} layout={layout} />
  );
  

}

export default TransactionRecord;