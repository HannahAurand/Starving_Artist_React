import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import data from './data.json'
import StoreList from './StoreList/StoreList'
import SingleStore from './SingleStore/SingleStore'

class App extends Component {
  render() {
    // console.log(data[0].name)
    return (
      <div className="container">
        <div className="navBar">
          <nav>
            <Link to="/">
              <h1>Starving Artist</h1>
            </Link>
            <h5>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </h5>
          </nav>
        </div>
        <Switch>
          {/* making store data available ot landing page component for reusability's sake */}
          {/* <StoreList /> */}
          <Route path="/:id" component={SingleStore} />
          <Route path="/" component={StoreList} />
          {/* <Route path="/store/add" component={Add} /> */}
          {/* <Route path="/store/edit" component={Edit} /> */}
        </Switch>
      </div>
    )
  }
}

export default App
