import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Favorites from './Favorites';
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/favorites" component={Favorites} />
          </div>
          </Router>
        </MuiThemeProvider>      
      </div>
    );
  }

}

export default App;
