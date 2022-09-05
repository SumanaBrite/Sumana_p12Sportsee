import './AverageSessionsChart.css'
import React from 'react'
import PropTypes from 'prop-types';


export default function AverageSessionsChartTooltip({ active, payload }) {
	if (active) {
		return <p className='averageSessionsTooltip'>{`${payload[0].value} `} min</p>;
	}
	return null;
}

AverageSessionsChartTooltip.propTypes = {
	payload : PropTypes.array,
}

