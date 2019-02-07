import React from 'react';

const City_Page =(props)=>{
	
	const CityId = props.match.params.id;
    const City = props.Data[CityId]
	console.log(City);
	return(
		<div>
			<div>
			{console.log(props)}
				<img src={props.mainImageUrl} alt={City.id}/>
			
			</div>
		</div>)
}

export default City_Page;
