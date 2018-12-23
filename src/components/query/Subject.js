import React, { Component } from 'react'

class Subject extends Component {
  render() {
    return (
      <div class="row row_style">
          <form class="col s9">
                <div class="row">
                    <div class="input-field col s6">
                          <i class="material-icons prefix">mode_edit</i>
                          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                          <label for="icon_prefix2">Subject</label>
                    </div>
                </div>
          </form>
          <button class="btn red lighten-2 waves-effect waves-light submit_btn_style" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
          </button>
      </div>
    )
  }
}

export default Subject
