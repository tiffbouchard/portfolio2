import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <main>
      <MobileHeader/>
      <div className="main">
        <Header/>
          <Switch>
            <Route 
              exact path="/"
              render={() => <TopArtists/>}
            /> 
            <Route 
              exact path="/about"
              render={() => <TopArtists/>}
            /> 
            <Route 
              exact path="/following"
              render={() => <Following/>}
            /> 
          </Switch>
      </div>
    </main>

  );
}

export default App;
