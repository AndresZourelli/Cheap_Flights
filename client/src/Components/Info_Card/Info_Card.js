import React from 'react';
import "./Info_Card.css";
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';


const Info_Card = ({ history, CityData, expanded = false, showActions = false, goBack = null, ...rest }) => {
  const link = `/location/${CityData.cityname}`
  return (
    
    
    <div className="card_container" key={CityData.cityname} onClick={rest.onClick}>
      <Link className='link-style' to={link}>
        <img className="image_destination" src={CityData.cityimage} alt={CityData.cityname}/>
        <div className="text_container">
          <h1>{CityData.cityname}</h1>
          <div className="subtitle">City of Love</div>
          <p>Click for More Details</p>
        </div>
      </Link>
    </div>
    

    )
}

export default withRouter(Info_Card);