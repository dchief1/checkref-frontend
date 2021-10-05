import {GET_TEAMS_FAILURE, GET_TEAMS_LOADING, GET_TEAMS_SUCCESS} from '../types/recruiterTypes';

const initialState = {
    teams: [],
    getTeamsError: null,
    getTeamsLoading: false,
    getTeamsSuccess: false,
};

const authReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_TEAMS_LOADING:
            return {
                ...state,
                getTeamsLoading: true,
            };
        case GET_TEAMS_FAILURE:
            return {
                ...state,
                getTeamsSuccess: false,
                getTeamsLoading: false,
                getTeamsError: 'getTeamsError',
                teams: [],
            };
        case GET_TEAMS_SUCCESS:
            return {
                ...state,
                getTeamsSuccess: true,
                getTeamsLoading: false,
                getTeamsError: null,
                teams: payload,
            };
        default:
            return state;
    }
};

export default authReducer;
