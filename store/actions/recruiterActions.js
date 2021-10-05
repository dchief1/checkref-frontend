import axios from 'axios';
import {GET_TEAMS_FAILURE, GET_TEAMS_LOADING, GET_TEAMS_SUCCESS} from '../types/recruiterTypes';
import {rootEndPoint} from '../../utils/endpoints';

export const getTeams = () => async dispatch => {
    dispatch({
        type: GET_TEAMS_LOADING,
    });
    try {
        const res = await axios.get(`/team`, {withCredentials: true});
        if (res?.data?.success == true) {
            const {data} = res.data;
            dispatch({
                type: GET_TEAMS_SUCCESS,
                payload: data,
            });
        } else {
            dispatch({
                type: GET_TEAMS_FAILURE,
            });
        }
    } catch (err) {
        dispatch({
            type: GET_TEAMS_FAILURE,
        });
    }
};
