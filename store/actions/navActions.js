import {TOGGLE_MOBILE_SIDE_NAV} from '../types/navTypes';

export const toggleMobileSideNav = () => dispatch => {
    dispatch({
        type: TOGGLE_MOBILE_SIDE_NAV,
    });
};
