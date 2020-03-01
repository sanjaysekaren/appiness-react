import DashboardData from '../json_Files/dashboardData.json'

const initial_state = { dashboardData:'' }

const DashboardReducer = (state=initial_state,action)=>{
    if(action.type === 'FETCHDASHBOARDDATA'){
        return {
            ...state,dashboardData:DashboardData
        }
    }
    return state; 
}

export default DashboardReducer;