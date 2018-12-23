import React, { Component } from 'react'
import './Events.css'
import Stickynote from './Stickynote'

class Events extends Component {
  render() {
    return (
      <div>
      <div class="sticky_board">
        <h3>Todo Board</h3>
      </div>
        <div class="sticky container">
          <ul>
            <a class="btn-large left red btn-floating waves-effect waves-light">
              <i class="large material-icons">add</i>
            </a>

            <Stickynote />
            <Stickynote />
            <Stickynote />
            <Stickynote />
            <Stickynote />
            <Stickynote />
            <Stickynote />
          </ul>
        </div>
      </div>
    )
  }
}

export default Events
