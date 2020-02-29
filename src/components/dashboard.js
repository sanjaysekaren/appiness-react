import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Grid, Paper } from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import loginPage from './loginPage';

const styles={ marginLeft: '2%',marginRight:'2%',marginBottom:'2%', backgroundColor: 'white', fontWeight: '800px' }

class DashboardPage extends React.Component {
    render() {
        if(!this.props.componentState.LoginReducer.isAuth){
            return (<Redirect to="/" />);
        }
        return (
            <div>
                <Card style={{ margin: '5%', backgroundColor: 'lightgrey' }} >
                    <CardContent style={{ fontWeight: "bolder",fontSize:'70px' }}>
                        Dashboard Details
                    </CardContent>
                    {this.props.componentState.LoginReducer.dashboardData.map((detail) =>
                        <CardContent key={detail.id} style={styles}>
                            <div style={{ flexGrow: 1 }}>
                                <Grid container spacing={3}>
                                    <Grid container
                                        spacing={7}
                                        direction="column"
                                        alignItems="left"
                                        justify="left"
                                        style={{ minHeight: '10vh' }} item xs={12}>
                                     <h3  variant="outlined" >{detail.name.toUpperCase()}</h3>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {detail.age}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {detail.gender.toUpperCase()}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {detail.email}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {detail.phoneNo}
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
    return {
        componentState: state
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        pageLoad:()=>dispatch()
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(DashboardPage)