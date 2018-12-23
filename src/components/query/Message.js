import React, { Component } from 'react'

class Message extends Component {
  render() {
    return (
      <div class="row row_style">
            <form class="col s12">
                  <div class="row">
                        <div class="input-field col s12">
                              <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                              <label for="textarea2">Message</label>
                        </div>
                  </div>
            </form>
      </div>
    )
  }
}

export default Message
