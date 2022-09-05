import './Points.css'
import React from 'react'
import PropTypes from 'prop-types';

export default function Points({img,kcal, catogery}) {
    return(
        
        <div className='points'>
            
                <div className='container-right'>
                    <img className='graph-icon' src={img} alt="icon-fire" />
                    <div className='info-icon' >
                        <h5>{kcal}</h5>
                        <p className='text-icon'>{catogery}</p>
                    </div>
                </div>
            </div>       
    )
}

Points.propTypes =  {
    img : PropTypes.string.isRequired,
    kcal: PropTypes.number.isRequired,
    catogery: PropTypes.string.isRequired,
}