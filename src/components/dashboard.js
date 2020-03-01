import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Grid, Paper } from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import loginPage from './loginPage';
import * as Actions from '../actions/dashboardAction';


const styles={ marginLeft: '2%',marginRight:'2%',marginBottom:'2%', backgroundColor: 'white', fontWeight: '800px' }

class DashboardPage extends React.Component {
    componentDidMount(){
        this.props.pageLoad()
    }

    render() {
        if(!this.props.componentState.LoginReducer.isAuth){
            console.log('redirecting because not authenticated')
            return (<Redirect to="/" />);
        }
        
        return (
            
            <div>
                <Card style={{ margin: '5%', backgroundColor: 'lightgrey' }} >
                    <CardContent style={{ fontWeight: "bolder",fontSize:'50px' }}>
                        Dashboard Details
                    </CardContent>
                    {this.props.componentState.LoginReducer.dashboardData.map((detail) =>
                        <CardContent key={detail.id} style={styles}>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={3}>
                                    <Grid container
                                        spacing={7}
                                        direction="column"
                                        style={{ minHeight: '10vh' }} item xs={12}>
                                            
                                     <h3  variant="outlined" >Name : {detail.name.toUpperCase()}</h3>
                                    </Grid>
                                    <Grid item xs={6}>
                                        Age : {detail.age}
                                    </Grid>
                                    <Grid item xs={6}>
                                        Gender : {detail.gender.toUpperCase()}
                                    </Grid>
                                    <Grid item xs={6}>
                                        Email : {detail.email}
                                    </Grid>
                                    <Grid item xs={6}>
                                        Phone No : {detail.phoneNo}
                                    </Grid>
                                </Grid>
                                
                            </div>
                        </CardContent>
                    )}

                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        componentState: state
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        pageLoad:()=>dispatch(Actions.fetchDashboardData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardPage)