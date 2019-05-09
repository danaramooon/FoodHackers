import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import FoodBlock from './components/foodContainer/foodblock'
import Favourite from './components/favouriteFood/favourite'
import './App.css';
import CheckBox from './components/checkbox/checkbox';
import Authorization from './components/authorization/authorization.js';
import Registration from './components/registration/registration.js';
import Forum from './components/forum/forum.js';



class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header/>
              <div>  
                <Route path="/favourite/" component={Favourite} />
                <div class = "container">
                  <Route path="/recept/" component={FoodBlock} />
                </div>
                <Route path="/checkbox/" component={CheckBox}/>
                <Route path = "/authorization/" component = {Authorization}/>
                <Route path = "/registration/" component = {Registration}/>
                <Route path = "/forum/" component = {Forum}/>
              </div>
            <Footer/>
          </div>
        </Router>
    );
  }
}

export default App;
