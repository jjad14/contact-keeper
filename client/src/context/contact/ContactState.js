import React, { useReducer } from 'react';
import axios from 'axios';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import * as actions from '../actions';

const ContactState = props => {
    const initalState = {
        contacts: [],
        current: null,
        filtered: null,
        error: null
    };

    const [ state, dispatch ] = useReducer(contactReducer, initalState);

    // Add Contact
    const addContact = async (contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/contacts', contact, config);

            dispatch({ 
                type: actions.ADD_CONTACT, 
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: actions.CONTACT_ERROR,
                payload: error.response.msg
            });
        }

    };

    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: actions.DELETE_CONTACT, payload: id});  
    };

    // Update Contact
    const updateContact = contact => {
        dispatch({ type: actions.UPDATE_CONTACT, payload: contact});  
    };    

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: actions.SET_CURRENT, payload: contact});  
    };  

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: actions.CLEAR_CURRENT });  
    };  

    // Filter Contacts
    const filterContacts = text => {
        dispatch({ type: actions.FILTER_CONTACTS, payload: text});  
    };    

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: actions.CLEAR_FILTER });  
    };  

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            error: state.error,
            addContact,
            deleteContact,
            updateContact,
            setCurrent,
            clearCurrent,
            filterContacts,
            clearFilter
        }}>
            { props.children }
        </ContactContext.Provider>
    );

};

export default ContactState; 
