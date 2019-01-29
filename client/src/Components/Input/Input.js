import React from 'react';

const City_Page =(props)=>{
	
	const CityId = parseInt(props.match.params.id);
    const City = props.Data.Tabs.find(City =>
    City.id === CityId);
	console.log(props.match);
	return(
		<div>
			<div>
				<img src={City.mainImageUrl} alt={City.id}/>
			</div>
		</div>)
}

export default City_Page;
