import './Dashboard.css'
import React, { useState, useEffect } from 'react';
import { getUserInfos } from '../../services/Api';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ActivityChart from '../Recharts/ActivityChart/ActivityChart';
import AverageSessionsChart from '../Recharts/AverageSessionsChart/AverageSessionsChart';
import ScoreChart from '../Recharts/ScoreChart/ScoreChart';
import PerformanceChart from '../Recharts/PerformanceChart/PerformanceChart';
import Points from '../../components/Points/Points'
import { mockedData } from '../../data/data';

export default function Dashboard() {

	const [data, setData] = useState([]);
	const [score, setScore] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const getData = async () => {
			if (mockedData) {
				{
					mockedData.map((entry) => {
						if (id == entry.data.id) {
							setData(entry.data);
							setScore([
								{ value: entry.data.todayScore || entry.data.score },
								{
									value: 1
								},
							]);

						}
					})
				}
			}

			else {
				const request = await getUserInfos(id);
				if (!request) return <Navigate to='/404' />;
				setData(request.data);
				setScore([
					{ value: request.data.todayScore || request.data.score },
					{
						value: 1
					},
				]);
			}
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;
	return (
		<div className='container-body'>
			<div className='section-header'>
				<h1>
					Bonjour <span>{data.userInfos.firstName}</span>
				</h1>
				<p>Félicitations ! Vous avez explosé vos objectifs hier <span role="img" aria-label="emoji">👏</span></p>
			</div>
			<div className='container-charts'>
				<div className='left-chart'>
					<ActivityChart id={id} />
					<div className='container-smallCharts'>
						<AverageSessionsChart id={id} />
						<PerformanceChart id={id} />
						<ScoreChart id={id} data={score} />
					</div>

				</div>
				<div className='right-chart'>
					<Points img={'/img/calories-icon.png'} kcal={data.keyData.calorieCount} catogery={"Calories"} />
					<Points img={'/img/protein-icon.png'} kcal={data.keyData.proteinCount} catogery={"Proteins"} />
					<Points img={'/img/carbs-icon.png'} kcal={data.keyData.carbohydrateCount} catogery={"Glucides"} />
					<Points img={'/img/fat-icon.png'} kcal={data.keyData.lipidCount} catogery={"Lipides"} />

				</div>
			</div>
		</div>

	)
}

