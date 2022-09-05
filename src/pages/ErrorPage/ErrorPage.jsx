import React from 'react'
import './ErrorPage.css'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="error__container">
            <p className="error__code">404</p>
            <p className="error__text">Oups ! La page que vous demandez n'existe pas.</p>
            <Link className="error__return" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
