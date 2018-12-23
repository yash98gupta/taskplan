import React, { Component } from 'react'
import Taskstatus from './Taskstatus'
import Tasks from '../tasks/Tasks'

class Dashboard extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">

          <Taskstatus />

          <div class="col l8 right right_dashboard">

              <div class="col l8 dashboard_card">
                <a class="task_headline">Tasks Scheduled</a>
              </div>

              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />

          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
