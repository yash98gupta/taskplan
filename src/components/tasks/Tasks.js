import React, { Component } from 'react'

class Tasks extends Component {
  render() {
    return (
              <div class="col l6">
                <div class="card z-depth-2">

                      <div class="card-content">
                          <span class="card-title">

                            <div class="switch">
                                Practile File
                              <label class="right">

                                <input type="checkbox" />
                                  <span class="lever"></span>
                                  <i class="material-icons">check</i>
                              </label>
                            </div>

                          </span>

                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                             dolor in reprehenderit in voluptate velit esse cillum dolore eu
                          </p>
                      </div>

                      <div class="card-action">
                          <a>view</a>
                          <a>Edit</a>
                          <a>Create Subtask</a>
                      </div>

                </div>
              </div>

    )
  }
}

export default Tasks
