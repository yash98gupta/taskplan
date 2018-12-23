import React, { Component } from 'react'
import './Project.css'
import Filteredproject from './Filteredproject'
import Projectstatus from './Projectstatus'


class Projects extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <Projectstatus />

          <div class="col l8 right right_dashboard">

              <div class="col l8 dashboard_card">
                <a class="task_headline">Projects</a>
              </div>

              <Filteredproject />
              <Filteredproject />
              <Filteredproject />
          </div>

        </div>
      </div>
    )
  }
}

export default Projects
