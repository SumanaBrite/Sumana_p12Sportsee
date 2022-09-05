import './VerticalBar.css'
import React from 'react';


export default function VerticalBar() {
     return (
          <section className='verticalBar'>
               <div className='sportsLogo'>  
               <img src="/yoga.svg" alt="yoga" />
               <img src="/swimming.svg" alt="swimming" />
               <img src="/cycling.svg" alt="cycling" />
               <img src="/dumbbell.svg" alt="dumbbell" />
               </div>
               <div className='copyright'>
                    <p>Copyryght, Sportsee2020</p>
               </div>
          </section>
     )

}