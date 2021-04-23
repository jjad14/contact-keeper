import React, { useReducer } from 'react';
import {v4 as uuidv4} from "uuid";

import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import * as actions from '../actions';

const AlertState = props => {
    const initalState = [];

    const [ state, dispatch ] = useReducer(alertReducer, initalState);

    // Set Alert
    const setAlert = (message, type, timeout = 5000) => {
        const id = uuidv4();

        dispatch({type: actions.SET_ALERT, payload: {message, type, id}});

        setTimeout(() => {
            dispatch({type: actions.REMOVE_ALERT, payload: id});
        }, timeout);
    };

    return (
        <AlertContext.Provider
        value={{
            alerts: state,
            setAlert
        }}>
            { props.children }
        </AlertContext.Provider>
    );

};

export default AlertState; 
