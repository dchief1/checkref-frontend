import {
    LOGIN_FAILURE,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    CLEAR_ERRORS,
    CLEAR_MESSAGE,
} from '../types/authTypes';

const initialState = {
    user: {},
    error: null,
    message: null,
    registerLoading: false,
    registerSuccess: false,
    loginLoading: false,
    loginSuccess: false,
};

const authReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case REGISTER_LOADING:
            return {
                ...state,
                registerLoading: true,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                registerSuccess: false,
                registerLoading: false,
                error: payload,
                message: null,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerSuccess: true,
                registerLoading: false,
                error: null,
                message: payload,
            };
        case LOGIN_LOADING:
            return {
                ...state,
                loginLoading: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loginSuccess: false,
                loginLoading: false,
                error: payload,
                message: null,
                user: {},
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                loginLoading: false,
                error: null,
                message: 'Logged in successfully',
                user: payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        case CLEAR_MESSAGE:
            return {
                ...state,
                message: null,
            };

        default:
            return state;
    }
};

export default authReducer;
