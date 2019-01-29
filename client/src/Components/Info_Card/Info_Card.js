import React from 'react';
import "./Info_Card.css";
import {  withRouter } from "react-router-dom";


const Info_Card = ({ history, CityData, expanded = false, showActions = false, goBack = null, ...rest }) => {

    const City = CityData;
    console.log(City)
    return (
        <div  >
      <div className="card_container" key={City.id} onClick={rest.onClick}>
        <img className="image_destination" src={City.mainImageUrl} alt={City.departingCity}/>
        <div className="text_container">
          <h1>{City.departingCity}</h1>
          <div className="subtitle">City of Love</div>
          <p>Click for More Details</p>
        </div>
   </div>

  </div>
    )
}

export default withRouter(Info_Card);