import React, { Component } from 'react';

import {HashRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Favorites from '../containers/Favorites';
import MainPage from './MainPage';
import GifPage from './GifPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/favorites" component={Favorites} />
            <Route name="gif" path="/gif/:id" component={GifPage} />
          </div>
          </Router>
        </MuiThemeProvider>      
      </div>
    );
  }

}

export default App;
