import React, { Component } from 'react'

class Projectstatus extends Component {
  render() {
    return (
      <div class="col l3 dashboard_card left_dashboard m12 s12">
        <div class="card z-depth-2">
          <div class="card-action">
            <ul>
              <li class="tasks_list"><a>Live Projects</a></li>
              <li class="tasks_list"><a>Upcoming Projects</a></li>
              <li class="tasks_list"><a>Projects Completed</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Projectstatus
