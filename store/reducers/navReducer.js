import {TOGGLE_MOBILE_SIDE_NAV} from '../types/navTypes';

const initialState = {
    mobileSideNavOpen: false,
};

const navReducer = (state = initialState, action) => {
    const {type} = action;
    switch (type) {
        case TOGGLE_MOBILE_SIDE_NAV:
            return {
                ...state,
                mobileSideNavOpen: !state.mobileSideNavOpen,
            };
        default:
            return state;
    }
};

export default navReducer;
