import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./MarkInfo.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MarkerInfo = (props) => {


    const { selectedMarker } = props;
    const { street, x, project, y, transaction, marketSegment, location, name, status } = selectedMarker || "";


    return (

        <div className="marker-info">
            <h2>Marker Information</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Street:</td>
                        <td>{street}</td>
                    </tr>
                    <tr>
                        <td>X Coordinate:</td>
                        <td>{x}</td>
                    </tr>
                    <tr>
                        <td>Project:</td>
                        <td>{project}</td>
                    </tr>
                    <tr>
                        <td>Y Coordinate:</td>
                        <td>{y}</td>
                    </tr>
                    <tr>
                        <td>Market Segment:</td>
                        <td>{marketSegment}</td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td>{location && `${location.lat}, ${location.lng}`}</td>
                    </tr>
                    {/* Render transaction details */}
                    <tr>
                        <td>Transaction:</td>
                        <td>
                            <Link to={"/Details"} state={selectedMarker }>
                                Go to Details
                            </Link>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default MarkerInfo;

