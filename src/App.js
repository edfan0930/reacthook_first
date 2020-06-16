import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import container from './containers'
import routes from './router'

function App() {
  console.log('routes',routes()["Hello"])
  return (
    <div className="App">
      <header className="App-header">
      <Route path="/say" component={container['Hello']}></Route>
      </header>
    </div>
  );
}

export default App;
