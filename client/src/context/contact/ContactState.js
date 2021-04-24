import React, { useReducer } from 'react';
import axios from 'axios';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import * as actions from '../actions';

const ContactState = props => {
    const initalState = {
        contacts: null,
        current: null,
        filtered: null,
        error: null
    };

    const [ state, dispatch ] = useReducer(contactReducer, initalState);

    // Get Contacts
    const getContacts = async () => {
        try {
            const res = await axios.get('/api/contacts');

            dispatch({ 
                type: actions.GET_CONTACTS, 
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: actions.CONTACT_ERROR,
                payload: error.response.msg
            });
        }
    };

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

    // Clear Contacts
    const clearContacts = () => {
        dispatch({type: actions.CLEAR_CONTACTS});
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
            getContacts,
            addContact,
            deleteContact,
            updateContact,
            setCurrent,
            clearCurrent,
            filterContacts,
            clearContacts,
            clearFilter
        }}>
            { props.children }
        </ContactContext.Provider>
    );

};

export default ContactState; 
