import VerticalBar from '../../components/VerticalBar/VerticalBar';
import Dashboard from '../../components/Dashboard/Dashboard';
import React from 'react';
// import PropTypes from 'prop-types';
import './UserPage.css'


export default function UserPage() {

    return(
        <div className='container-dashboard'>     
        <section className='container-verticalBar'>
        <VerticalBar/>  
        </section>
          <section  className='section-graph'>
          <Dashboard/>
         </section> 
    
        </div>
    )  
}

