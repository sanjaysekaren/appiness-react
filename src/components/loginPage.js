import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

import Dashboard from './dashboard';
import ValidationError from './ValidationError';
import * as Actions from '../actions/loginAction';

const styles = { width: '50%' }

class LoginPage extends React.Component {
    state = {
        userName: '',
        password: '',
        formErrors: { userName: '', password: '' },
        userNameValid: false,
        passwordValid: false,
        formValid: false
    }
    // onChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value })
    // }
    onEmailChange = (event) => {
        let fieldName=event.target.name
        let fieldValue=event.target.value
        this.setState({ userName: fieldValue },()=>{this.validateField(fieldName, fieldValue)})
    }
    onPasswordChange = (event) => {
        let fieldName=event.target.name
        let fieldValue=event.target.value
        this.setState({ password: fieldValue },()=>{this.validateField(fieldName, fieldValue)})
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userNameValid = this.state.userNameValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'userName':
              if(value===''){
                userNameValid=false
                fieldValidationErrors.userName = userNameValid ? '' : 'should not be empty,Trying entering valid value';
                break;
              }
            userNameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.userName = userNameValid ? '' : ' is Invalid,Trying entering valid value';
            break;
          case 'password':
            if(value===''){
                userNameValid=false
                fieldValidationErrors.password = userNameValid ? '' : 'should not be empty,Trying entering valid value';
                break;
              }
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is Too Short,Trying entering valid value';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
            userNameValid: userNameValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      validateForm() {
        this.setState({formValid: this.state.userNameValid && this.state.passwordValid});
      }
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
      
    render() {
        let isAuthenticated = this.props.componentState.LoginReducer.isAuth
        let loginCard = (
            <form>
                <div>
                    <h2 style={{ fontWeight: '80px' }}>
                        EmailID
                    </h2>
                    <TextField id="field1" label="Enter EmailID" style={styles} variant="outlined" type='text' name='userName' onChange={this.onEmailChange} value={this.state.userName} />
                    <p></p>
                </div>
                <div>
                    <h2>
                        Password
                    </h2>
                    <TextField id="field2" label="Enter Password" style={styles} variant="outlined" type='password' value={this.state.password} name='password' onChange={this.onPasswordChange} />


                </div>
                <div>
                    <Button variant="contained" style={{ margin: 10 }} type='submit' disabled={!this.state.formValid} onClick={() => this.props.loginClicked(this.state.userName, this.state.password)}>
                        Login
                        </Button>
                </div>
                <div >
                    <ValidationError formErrors={this.state.formErrors} />
                </div>
                <div>
        <p>{}</p>
                </div>

            </form>

        )
        return (isAuthenticated ?<Redirect to="/Dashboard" /> : loginCard)
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        componentState: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginClicked: (name, password) => dispatch(Actions.loginFunctionality(name,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);