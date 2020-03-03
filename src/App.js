import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Search from './Search';
import Favorites from './Favorites';


export default class App extends Component {
  render() {
    return (
      <div>
          <header> <img id="mainLogo" src="https://images.squarespace-cdn.com/content/v1/53a5c178e4b0e026bea34111/1511794366829-PQOXPZ46866AJOS38P2M/ke17ZwdGBToddI8pDm48kJLM-T-yFvpMwUNfkFEh31sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKceHGIwjakYinPlsWfnGyDThxF8wZIml_BhoL8Qbtko9Zq5kw7oryv0MfhCK5SO-kk/image-asset.png"/>
          </header>
          <Router>
             <Switch>
               <Route exact path="/" component={Search} />
               <Route path="/" component={Favorites} />
             </Switch>
          </Router>
      </div>
    )
  }
}
