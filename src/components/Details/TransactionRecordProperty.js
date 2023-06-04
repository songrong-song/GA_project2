import React, { useEffect, useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
import Plotly from 'react-plotly.js';

// import "./Price.css";

function TransactionRecordProperty(props) {
    const [transactionLst, setTransactionLst] = useState([]);
    const [times, setTimes] = useState([])
    const [prices, setPrices] = useState([])
    const [details, setDetails] = useState([])


    useEffect(() => {
        setTransactionLst(props.transaction);
        console.log(transactionLst)
    }, [props.transaction]);


    useEffect(() => {

        const times_ = transactionLst && transactionLst.length > 0
        ? transactionLst.map(item => {
            const contractDate = item.contractDate;
            const year = '2022'; // Set the desired year
            const month = contractDate.slice(0, 2);
            const day = contractDate.slice(2);
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;
          })
        : [];
      
        setTimes(times_)

        const prices_ = transactionLst && transactionLst.length > 0
            ? transactionLst.map(item => item.price)
            : [];
        setPrices(prices_)

        const details_ = transactionLst && transactionLst.length > 0
            ? [...transactionLst]
            : [];
        setDetails(details_)

        // Perform any necessary data processing here
    }, [transactionLst]);



    const data = [
        {
            x: times,
            y: prices,
            text: details.map(item => {
                const formattedItem = Object.entries(item)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join('\n');
                return formattedItem;
            }),
            type: 'scatter',
            mode: 'markers',
            line: { color: 'blue' },
        },
    ];

    const layout = {
        // position: "relative",
        width: 1420,
        height: 300,
        title: {
            text: 'Transation Record',
            x: 0.05, // Adjust the x value as needed
            xanchor: 'left',
        },
        xaxis: {
            type: 'date', // Specify the x-axis type as 'date'
            tickformat: '%Y-%m-%d', // Format the tick labels as 'YYYY-MM-DD'
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
            // title: 'Price Index',
            // font: {
            //     size: 5,
            // },
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
        <Plotly data={data} layout={layout} config={{ responsive: true }} />
    );


}

export default TransactionRecordProperty;