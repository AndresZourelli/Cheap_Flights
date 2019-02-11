import React from 'react';
import "./Info_Card.css";
import { withRouter } from "react-router-dom";


const Info_Card = ({ history, CityData, expanded = false, showActions = false, goBack = null, ...rest }) => {
    const City = CityData;
    return (
    
    <div className="card_container" key={City.CityName} onClick={rest.onClick}>
        <img className="image_destination" src={City.mainImageUrl} alt={City.CityName}/>
        <div className="text_container">
          <h1>{City.departingcity}</h1>
          <div className="subtitle">City of Love</div>
          <p>Click for More Details</p>
        </div>
    </div>


    )
}

export default withRouter(Info_Card);