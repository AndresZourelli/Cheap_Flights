import React from 'react';
import Info_Card from "../Info_Card/Info_Card.js";
import { withRouter } from "react-router-dom";
import axios from 'axios';
const CityInfo = ({ history, CityData, ...rest }) => {
    let element = null;

   
    const onOpen = (event) => {

        const { top, right, bottom, left, width, height } = element.getBoundingClientRect();

        history.push({
            pathname: `/location/${CityData.CityName}`,
            state: {
                to: 'modal',
                meta: {
                    from: { top, right, bottom, left, width, height },
                },
            },
        });
    }



    return (
    <div className='holder' ref={(el)=>{element=el;}}>
      <Info_Card CityData={CityData} onClick={onOpen} {...rest}/>
    
    </div>
    )
}
export default withRouter(CityInfo);