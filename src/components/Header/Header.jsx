import './Header.css'
import React from 'react';


export default function Header() {
    return(
        <header>
           <img src="/logo.svg" alt="" />
           <ul className="navBar">
               <li className="nav-item-list">Acceuil</li>
               <li className="nav-item-list">Profil</li>
               <li className="nav-item-list">Réglage</li>
               <li className="nav-item-list">Communauté</li>
           </ul>
            
        </header>
    )
    
}