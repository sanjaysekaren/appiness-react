import {combineReducers} from 'redux';
import loginReducer from './loginReducer';

const rootReducer =combineReducers({
    LoginReducer:loginReducer
})

export default rootReducer;