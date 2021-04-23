import React, { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";

import AuthContext from './authContext';
import authReducer from './authReducer';
import * as actions from '../actions';

const AuthState = props => {
    const initalState = {
        token: localStorage.getItem('token'),
        user: null,
        isAuthenticated: null,
        loading: true,
        error: null
    };

    const [ state, dispatch ] = useReducer(authReducer, initalState);

    // Load User (check which user is logged in)


    // Register User


    // Login User


    // Logout User


    // Clear Errors


    return (
        <AuthContext.Provider
        value={{
            token: state.token,
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
        }}>
            { props.children }
        </AuthContext.Provider>
    );

};

export default AuthState; 
