import React, { useReducer } from 'react';
import axios from 'axios';

import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

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
    const loadUser = async () => {
        // load token into global headers
        // if (localStorage.token) {
            setAuthToken(localStorage.token);
        // }

        try {
            const res = await axios.get('/api/auth');

            dispatch({
                type: actions.USER_LOADED, 
                payload: res.data
            });

        } catch (error) {
            dispatch({type: actions.AUTH_ERROR});       
        }

    };

    // Register User
    const register = async (formData) => {
        const config ={
            headers: {
                'Context-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({type: actions.REGISTER_SUCCESS, payload: res.data});

            loadUser();
        }
        catch(err) {
            dispatch({type: actions.REGISTER_FAIL, payload: err.response.data.message});
        }
    };

    // Login User
    const login = async (formData) => {
        const config ={
            headers: {
                'Context-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/auth', formData, config);

            dispatch({
                type: actions.LOGIN_SUCCESS, 
                payload: res.data
            });

            loadUser();
        }
        catch(err) {
            dispatch({
                type: actions.LOGIN_FAIL, 
                payload: err.response.data.message
            });
        }

    };

    // Logout User
    const logout = () => {
        console.log('Logout');

    };

    // Clear Errors
    const clearErrors = () => {
        dispatch({type: actions.CLEAR_ERRORS});
    };

    return (
        <AuthContext.Provider
        value={{
            token: state.token,
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            login,
            register,
            loadUser,
            logout,
            clearErrors
        }}>
            { props.children }
        </AuthContext.Provider>
    );

};

export default AuthState; 
