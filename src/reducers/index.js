import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import dashboardReducer from './dashboardReducer';

const rootReducer =combineReducers({
    LoginReducer:loginReducer,
    DashboardReducer:dashboardReducer
})

export default rootReducer;