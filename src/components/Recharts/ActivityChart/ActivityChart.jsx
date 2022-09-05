import './ActivityChart.css'
import React, { useState, useEffect } from 'react';
import { getUserActivity } from '../../../services/Api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ActivityChartTooltip from '../ActivityChartTooltip/ActivityChartTooltip';
import PropTypes from 'prop-types';
import { mockedData } from '../../../data/data'

/**
 * A bar chart showing user activity using recharts.
 * @Components
 * @param {number} id - The unique id of user passed in URL
 */

export default function ActivityChart({ id }) {
	const [data, setData] = useState([]);
	// console.log(data);

	useEffect(() => {


		const getData = async () => {
			if (mockedData) {
				{
					mockedData.map((entry) => {
						if (id == entry.data.id) {
							for (
								let i = 0;
								i < entry.data.activitySessions.length;
								i++
							) {
								entry.data.activitySessions[i] = {
									...entry.data.activitySessions[i],
									daysCount: i + 1,
								};
							}
						}
						setData(entry.data.activitySessions);
					})
				}


			}

			else {
				const request = await getUserActivity(id);
				for (
					let i = 0;
					i < request.data.sessions.length;
					i++
				) {
					request.data.sessions[i] = {
						...request.data.sessions[i],
						daysCount: i + 1,
					};
				}
				setData(request.data.sessions);

			}


		};
		getData();
	}, [id]);
	// Calculte the value of Yaxis
	const kgs = data.map((el) => el.kilogram);
	const maxOfkgs = Math.max(...kgs);

	return (
		<>
			<div className='container-activityChart'>
				<h5 className='activityChart-header'>
					Activité quotidienne
				</h5>
				<div className='dots'>
					<div className='kilo'>
						<div className='dot-black'>
						</div>
						<p>Poids (kg)</p>
					</div>
					<div className='calories'>
						<div className='dot-red'>
						</div>
						<p>Calories brûlées (kCal)</p>
					</div>
				</div>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={data}
					margin="2px"
					barCategoryGap="27" barGap="8"
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="daysCount" />
					<YAxis
						yAxisId='kg'
						// datakey='kilogram'
						orientation='right'
						axisLine={false}
						tickLine={false}
						domain={[0, maxOfkgs]}
						tickCount={5}
					/>
					<YAxis
						yAxisId='cal'
						// datakey='calories'
						orientation='false'
						axisLine={false}
						tickLine={false}
						hide={true}
					/>
					<Tooltip content={<ActivityChartTooltip />} />
					<Legend />
					<Bar
						yAxisId='kg'
						dataKey='kilogram'
						fill='#282D30'
						barSize={7}
						radius={[50, 50, 0, 0]} />
					<Bar yAxisId='cal'
						dataKey='calories'
						fill='#E60000'
						barSize={7}
						radius={[50, 50, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</>
	)
}

ActivityChart.prototype = {
	id: PropTypes.string.isRequired,
}




