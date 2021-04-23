import * as actions from '../actions';

const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_ALERT:
            return [
                ...state,
                action.payload
            ];
        case actions.REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);
        default:
            return state;
    }
};

export default reducer;













