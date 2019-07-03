import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Projectdetails from './components/Projectdetails'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Createproject from './components/Createproject'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path = '/' component = { Dashboard} />
            <Route path = '/project/:id' component = { Projectdetails }/>
            <Route path = '/signin' component = { Signin } />
            <Route path = '/signup' component = { Signup }/>
            <Route path = '/create' component = { Createproject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;