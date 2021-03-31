import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";



import './App.css';

function App() {
  return (
    <main>
    {/* <MobileHeader/> */}
      <Header/>
        <Switch>
          <Route 
            exact path="/"
            render={() => <Home/>}
          /> 
          <Route 
            exact path="/about"
            render={() => <About/>}
          /> 
          {/* <Route 
            exact path="/resume"
            render={() => <Resume/>}
          /> 
          <Route 
            exact path="/:slug"
            render={() => <Project/>}
          />  */}
        </Switch>
        <Footer/>
    </main>

  );
}

export default App;
