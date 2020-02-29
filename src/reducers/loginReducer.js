import LoginData from '../json_Files/loginData.json'
import DashboardData from '../json_Files/dashboardData.json'

const initial_state = { userName: '', password: '',isAuth:false,dashboardData:'',loginFail:false }

const LoginReducer = (state=initial_state,action)=>{
    if(action.type === 'LOGINFUNCTIONALITY'){
        if(action.payload.userName === LoginData.username && action.payload.password===LoginData.password ){
            return{
                ...state,isAuth:true,dashboardData:DashboardData
            }
        }else{
            return {
                ...state,loginFail:true
            }
        }
    }
    return state; 
}

export default LoginReducer;