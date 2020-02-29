import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/loginPage';
import DashboardPage from './components/dashboard'

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor:'grey'}}>
          Appiness React
      </header>
        <div>
          <BrowserRouter>
            <Route path='/' exact component={LoginPage} />
            <Route path='/dashboard' component={DashboardPage} />
          </BrowserRouter>
        </div>
      </div>
    )
  };
}

export default (App);
