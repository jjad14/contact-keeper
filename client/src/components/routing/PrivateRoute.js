import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

// Private Route - <PrivateRoute />
// For Routes that need an authenticated user
const PrivateRoute = ({component: Component, ...rest}) => {
    const { isAuthenticated, loading } = useContext(AuthContext);

    return (
        <Route {...rest} render={props => 
            !isAuthenticated && !loading 
            ? (<Redirect to="/login"/>)
            : (<Component {...props}/>)
            }
        />
    );
};

export default PrivateRoute;
