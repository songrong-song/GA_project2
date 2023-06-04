import React from "react";
import { useLocation } from "react-router-dom";
import TransactionRecordProperty from "./TransactionRecordProperty";

function Details(props) {
  const routerLocation = useLocation();
  const selectedMarker  = routerLocation.state || {};
  const { street, x, project, y, transaction, marketSegment, markerLocation, name, status } = selectedMarker || {};

  console.log(transaction)
  return (
    <div>
      <h1>Project Name: {project}</h1>
      <TransactionRecordProperty transaction = {transaction}/>
      

    </div>
  );
}

export default Details;