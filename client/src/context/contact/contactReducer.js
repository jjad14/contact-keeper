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
        default:
            return state;
    }
};

export default reducer;













