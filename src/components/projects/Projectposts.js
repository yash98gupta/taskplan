import React, { Component } from 'react'


class Projectposts extends Component {
  render() {
    return (
      <div class="col l10 width_hundred">
        <div class="card z-depth-2">
          <div class="card-content">
            <span class="card-title">
              Practile File
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
               proident, sunt in culpa qui icia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="card-action">
              <a>Edit</a>
              <a>Comment</a>
              <a>Delete</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projectposts
