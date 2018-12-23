import React, { Component } from 'react'
import './Project.css'
import Teammembers from './Teammembers'
import Projectquery from './Projectquery'

class Selectedproject extends Component {
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

export default Selectedproject
