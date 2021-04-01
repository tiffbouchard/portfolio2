import React, { Fragment } from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ProjectDetails from "./pages/ProjectDetails";



import './App.css';

function App(props) {
  return (
    <main>
    {/* <MobileHeader/> */}
        <Switch>
          <Route 
            exact path="/resume"
            render={() => <Resume/>}
            /> 
          <Fragment>
            <Header/>
            <Route 
              exact path="/"
              render={() => <Home/>}
            /> 
            <Route 
              exact path="/about"
              render={() => <About/>}
            /> 
            <Route 
              exact path="/:slug"
              render={(props) => <ProjectDetails {...props}/>}
            /> 
            <Footer/>
          </Fragment>

        </Switch>
    </main>

  );
}

export default App;
