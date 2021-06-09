import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

import './App.css';


import Header from "./components/Header";
import DetailUser from "./views/DetailUser";
import Home from "./views/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header></Header>
    <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/detalles/:id' component={DetailUser}/>
      </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;