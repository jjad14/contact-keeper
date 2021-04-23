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
        case actions.CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        default:
            return state;
    }
};
// 9:17
export default reducer;













