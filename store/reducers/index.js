import {combineReducers} from 'redux';
import navReducer from './navReducer';
import authReducer from './authReducer';
import recruiterReducer from './recruiterReducer';

const rootReducer = combineReducers({
    navbar: navReducer,
    auth: authReducer,
    recruiter: recruiterReducer,
});

export default rootReducer;
