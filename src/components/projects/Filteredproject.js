import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Filteredproject extends Component {
  render() {
    return (
      <div class="col l10">
        <div class="card z-depth-2">
          <div class="card-content">
            <span class="card-title">
              Alchemy2018
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
               proident, sunt in culpa qui icia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="card-action">
              <Link to='/project_selected'>View</Link>
              <Link to='#'>Delete</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Filteredproject
