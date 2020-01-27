import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Search from './components/Search'
import Character from './components/Character'

class App extends React.Component {
  state = { serverMessage: '' }

  render(){
    return (
      <div id="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/search" component={Search}/>
            <Route path="/characters/:id" component={Character}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
