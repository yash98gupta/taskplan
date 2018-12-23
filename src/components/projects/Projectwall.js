import React, { Component } from 'react'
import Projectquery from './Projectquery'

class Projects extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <Teammembers />
          <Projectquery />
        </div>
      </div>
    )
  }
}

export default Projects
