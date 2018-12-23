import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Projects from './components/projects/Projects'
import Selectedproject from './components/projects/Selectedproject'
import Events from './components/events/Events'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>/
            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='/projects' component={Projects} />
            <Route path='/events' component={Events} />
            <Route path='/project_selected' component={Selectedproject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}




export default App;
