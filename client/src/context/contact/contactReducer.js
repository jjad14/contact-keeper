import * as actions from '../actions';

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload
                ]
            };
        case actions.UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => 
                    contact.id === action.payload.id 
                    ? action.payload 
                    : contact
                )
            };
        case actions.DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case actions.SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case actions.FILTER_CONTACTS:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    // gi for global and case insensitive
                    const regex = new RegExp(`${action.payload}`, 'gi');

                    return contact.name.match(regex) || contact.email.match(regex);
                })
            };
        case actions.CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case actions.CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case actions.CONTACT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;













