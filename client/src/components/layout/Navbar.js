import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import AuthContext from '../../context/auth/authContext';

const Navbar = ({title, icon}) => {
    const { isAuthenticated, logout, user } = useContext(AuthContext);

    const onLogoutHandler = () => {
        logout();
    };

    const authLinks = (
        <Fragment>
            <li>
                <i className="fas fa-user"></i>
                &nbsp;
                <span className="hide-sm">{user && user.name}</span>
            </li>
            <li>
                <a href="#!"
                   onClick={onLogoutHandler}>
                    <i className="fas fa-sign-out-alt"></i>
                    &nbsp;
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>        
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>        
        </Fragment>
    );


    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}/>&nbsp;{title}
            </h1>
            <ul>
                { isAuthenticated
                ? authLinks
                : guestLinks 
                }
            </ul>
        </div>
    );
};

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
};

export default Navbar
