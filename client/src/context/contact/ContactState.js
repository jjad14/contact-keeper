import React, { useReducer } from 'react';
// import uuid from 'uuid';
import {v4 as uuidv4} from "uuid";

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import * as actions from '../actions';

const ContactState = props => {
    const initalState = {
        contacts: [
            {
                id: 1,
                name: 'Sam Gambgee',
                email: 'sg@test.com',
                phone: '1234567890',
                type: 'personal',
            },
            {
                id: 2,
                name: 'Pete Carlson',
                email: 'pc@test.com',
                phone: '1234567890',
                type: 'professional',
            },
            {
                id: 3,
                name: 'James Dominik',
                email: 'jd@test.com',
                phone: '1234567890',
                type: 'personal',
            }
        ]
    };

    const [ state, dispatch ] = useReducer(contactReducer, initalState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuidv4();

        dispatch({ type: actions.ADD_CONTACT, payload: contact});
    };

    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: actions.DELETE_CONTACT, payload: id});  
    };

    // Update Contact
    

    // Set Current Contact


    // Clear Current Contact


    // Filter Contacts


    // Clear Filter


    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            addContact,
            deleteContact
        }}>
            { props.children }
        </ContactContext.Provider>
    );

};

export default ContactState; 
