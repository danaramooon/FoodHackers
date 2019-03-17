import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import FoodBlock from './components/foodContainer/foodblock'
import Favourite from './components/favouriteFood/favourite'
import './App.css';
import CheckBox from './components/checkbox/checkbox';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <div>  
            <Route path="/favourite/" component={Favourite} />
            <div class = "container">
              <Route path="/recept/" component={FoodBlock} />
            </div>
            <Route path="/checkbox/" component={CheckBox}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
