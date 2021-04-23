import * as actions from '../actions';

const reducer = (state, action) => {
    switch (action.type) {
        case actions.REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);

            return {
                ...state,
                ...action.payload ,
                isAuthenticated: true,
                loading: false    
            };
        case actions.LOGIN_SUCCESS:
            return {};
        case actions.REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            };
        case actions.LOGIN_FAIL:
            return {};
        case actions.CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

export default reducer;













