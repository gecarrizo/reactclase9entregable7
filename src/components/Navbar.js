import React from 'react'
import CartWidget from './CartWidget';
import Imagen from './images/cart.png';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>ZONA MATERIAL</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/category/1'>Herramientas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/category/2'>Pintura</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/category/3'>Sanitarios</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget imagen={Imagen} cantidad='4'/>
            </div>
        </nav>
    )
}

export default navbar