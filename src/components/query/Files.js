import React, { Component } from 'react'

class Files extends Component {
  render() {
    return (
      <div class="row row_style">
            <form action="#">
                  <div class="file-field input-field">
                        <div class="btn red lighten-2">
                              <span>File</span>
                              <input type="file" multiple />
                        </div>
                        <div class="file-path-wrapper">
                              <input class="file-path validate" type="text" placeholder="Upload multiple files" />
                        </div>
                </div>
            </form>
      </div>
    )
  }
}

export default Files
