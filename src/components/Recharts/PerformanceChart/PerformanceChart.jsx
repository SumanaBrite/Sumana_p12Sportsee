import './Performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import React, { useEffect, useState } from 'react';
import { getUserPerformance } from '../../../services/Api';
import PropTypes from 'prop-types';
import { mockedData } from '../../../data/data';

/**
 * A radar chart showing user's performance using recharts.
 * @Components
 * @param {number} id - The unique id of user passed in URL
 */
export default function PerformanceChart({ id }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const request = await getUserPerformance(id);
      request.data.data.map(obj => {
        console.log(obj);

        obj.kind = request.data.kind[obj.kind];
      });
      setData(request.data.data);

    };
    getData();
  }, [id]);
  return (
    <>
      <div className='container-performanceChart'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx='50%' cy='50%' outerRadius='60%' data={data}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey='kind'
              stroke='white'
              tickLine={false}
              tick={{ fontSize: 11 }}
            />
            <Radar
              dataKey='value'
              stroke='#FF0101'
              fill='#FF0101'
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>

      </div>
    </>
  )
}

PerformanceChart.prototype = {
  id: PropTypes.string.isRequired,
}