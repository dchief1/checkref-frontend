import axios from 'axios';
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
import UserService from '../../services/user.service';

export const loginUser = user => async dispatch => {
    try {
        dispatch({
            type: LOGIN_LOADING,
        });
        const res = await axios.post(`/user/login`, user);
        if (res.data?.success == true) {
            const {data} = res.data;
            UserService.setToken(data?.token);
            UserService.setUser(JSON.stringify(data?.user));
            axios.defaults.headers.authorization = `Bearer ${localStorage.getItem(
                'checkref_token',
            )}`;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data?.user,
            });
        } else {
            localStorage.clear();
            dispatch({
                type: LOGIN_FAILURE,
                payload: 'Something went wrong. Please try again',
            });
        }
    } catch (err) {
        localStorage.clear();
        if (err.response) {
            if (err.response.data) {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: err.response.data?.message,
                });
            } else if (err.response.status) {
                const status = err.response.status;
                if (/^4/.test(status)) {
                    dispatch({
                        type: LOGIN_FAILURE,
                        payload: 'Invalid values entered. Please try again',
                    });
                } else if (/^5/.test(status)) {
                    dispatch({
                        type: LOGIN_FAILURE,
                        payload: 'Something went wrong. Please refresh and try again',
                    });
                }
            } else {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: 'Something went wrong, please refresh and try again',
                });
            }
        } else {
            dispatch({
                type: LOGIN_FAILURE,
                payload: 'Something went wrong, please refresh and try again',
            });
        }
    }
};

export const registerUser = user => async dispatch => {
    try {
        dispatch({
            type: REGISTER_LOADING,
        });
        const res = await axios.post(`/user`, user);
        if (res.data?.success == true) {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: 'Account created successfully',
            });
        } else {
            dispatch({
                type: REGISTER_FAILURE,
                payload: 'Something went wrong. Please try again',
            });
        }
    } catch (err) {
        if (err.response) {
            if (err.response.data) {
                dispatch({
                    type: REGISTER_FAILURE,
                    payload: err.response.data?.error?.[0]?.message || err?.response?.data?.message,
                });
            } else if (err.response.status) {
                const status = err.response.status;
                if (/^4/.test(status)) {
                    dispatch({
                        type: REGISTER_FAILURE,
                        payload: 'Invalid values entered. Please try again',
                    });
                } else if (/^5/.test(status)) {
                    dispatch({
                        type: REGISTER_FAILURE,
                        payload: 'Something went wrong. Please refresh and try again',
                    });
                }
            } else {
                dispatch({
                    type: REGISTER_FAILURE,
                    payload: 'Something went wrong, please refresh and try again',
                });
            }
        } else {
            dispatch({
                type: REGISTER_FAILURE,
                payload: 'Something went wrong, please refresh and try again',
            });
        }
    }
};

export const clearMessage = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: CLEAR_MESSAGE,
        });
    }, 2200);
};

export const clearErrors = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: CLEAR_ERRORS,
        });
    }, 2200);
};
