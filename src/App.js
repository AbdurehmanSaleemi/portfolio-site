import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Error404 from './components/Error404.jsx'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
