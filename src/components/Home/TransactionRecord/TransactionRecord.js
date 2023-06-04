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
    // extract quaters and indexes data from the json
    var quarters_  = []
    housePriceObj.map(item => {quarters_.push(item.quarter)})
    var indexes_ = []
    setQuarters(quarters_);

    housePriceObj.map(item => {indexes_.push(item.index)})
    setIndexes(indexes_);

   
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
    // position: "relative",
    width: 1420,
    height: 300,
      title: {
    text: 'HDB Resale Price Index',
    x: 0.05, // Adjust the x value as needed
    xanchor: 'left',
  },
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
    plot_bgcolor: '#f2f2f2',
    paper_bgcolor: '#f2f2f2',
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
    <Plotly data={data} layout={layout} config={{ responsive: true }}/>
  );
  

}

export default TransactionRecord;