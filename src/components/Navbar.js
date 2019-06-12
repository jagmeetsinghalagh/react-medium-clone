import React, { Fragment } from'react';
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
                {props.isAuthenticated &&
                    <Fragment>
                        <li>
                            <Link to="/article/create">
                                <i className="fas fa-edit"></i> New Article
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings">
                                <i className="fas fa-cog"></i> Settings
                            </Link>
                        </li>
                        <li>
                            <Link to={`/profiles/${props.user.username}`}>{ props.user.username }</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={ props.logoutUser } >Log out</Link>
                        </li>
                    </Fragment>
                }

                {!props.isAuthenticated && 
                    <Fragment>
                        <li>
                            <Link to="/login" >Sign in</Link>
                        </li>
                        <li>
                            <Link to="/register" >Sign up</Link>
                        </li>
                    </Fragment>
                }
            </ul>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps,{
    logoutUser
})(Navbar);