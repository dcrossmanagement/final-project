import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CharacterSearch from './components/CharacterSearch'
import Character from './components/Character'
import LocationSearch from './components/LocationSearch'

class App extends React.Component {
  state = { serverMessage: '' }

  render(){
    return (
      <div id="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/characters" component={CharacterSearch}/>
            <Route path="/characters/:id" component={Character}/>
            <Route exact path="/locations" component={LocationSearch}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
