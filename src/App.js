import React from 'react';
import Navbar from "./Navbar";
import './App.css';
import Cart from "./Cart"
import {Route, Switch} from "react-router-dom";
import Home from "./Home"


class App extends React.Component {
  render(){
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={()=> <Home/>} />
        <Route exact path="/cart" render={() => <Cart />} />
      </Switch>
    </>
  );
}
}

export default App;
