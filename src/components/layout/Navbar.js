import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-gl navbar-dark bg-primary sticky-top">
            <Link className="navbar-brand" to="/"> Food Paradise</Link>
        </nav>
    )
}


export default Navbar
