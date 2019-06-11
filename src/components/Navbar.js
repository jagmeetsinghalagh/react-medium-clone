import React from'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/authActions';
import './styles/navbar-css.css';

const Navbar = (props) => {
    return (
        <nav className="navbar-custom">
            <div className="logo">
                <Link to="/" >Conduit</Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login" >Sign in</Link>
                </li>
                <li>
                    <Link to="/" onClick={ props.logoutUser } >Log out</Link>
                </li>
                <li>
                    <Link to="/register" >Sign up</Link>
                </li>
            </ul>
        </nav>
    );
}

export default connect(null,{
    logoutUser
})(Navbar);