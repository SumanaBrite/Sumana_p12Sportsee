import './ScoreChart.css'
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Label } from 'recharts';
import PropTypes from 'prop-types';

/**
 * A piechart chart showing user's score  using recharts.
 * @Components
 * @param {array} data - The score of a user 
 */
export default function ScoreChart({ data }) {
    return (
        <div className='container-ScoreChart'>
            {data.length && (
                <ResponsiveContainer>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            innerRadius={73}
                            outerRadius={85}
                            startAngle={90}
                            dataKey="value"
                        >
                            {data.map((entry, index) => {
                                if (index === 0) {
                                    return <Cell key={`cell-${index}`} fill="#FF0000" cornerRadius={10} />;
                                }
                                if (index === 1) {
                                    return <Cell key={`cell-${index}`} fill="transparent" />;
                                }

                            })}

                            <Label className="circle-label" fill={"black"} width={99} position="center">
                                {(data[0].value) * 100} % de votre objectif </Label>
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            )}


        </div>
    )
}
ScoreChart.prototype = {
    dataa: PropTypes.array,
}