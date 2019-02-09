import React from 'react';
import InfoCard from "../Info_Card/Info_Card.js";
import { connect } from 'react-redux';
import { fetchCities } from '../../actions/cityAction.js';
import { withRouter } from "react-router-dom";

const CityInfo = ({ history, CityData, ...rest }) => {
    let element = null;

    console.log(CityData);
    const onOpen = (event) => {

        const { top, right, bottom, left, width, height } = element.getBoundingClientRect();

        history.push({
            pathname: `/location/${CityData.departingcity}`,
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
      <InfoCard CityData={CityData} onClick={onOpen} {...rest}/>
    
    </div>
    )
}
const mapStateToProps = state => ({
	citys: state.citys.cities
})

export default connect(mapStateToProps, { fetchCities })(withRouter(CityInfo));

