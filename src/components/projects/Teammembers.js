import React, { Component } from 'react'
import Member from './Member'
class Teammembers extends Component {
  render() {
    return (
            <div class="col l3 dashboard_card left_dashboard m12 s12">

              <ul class="collection with-header">
                <li class="collection-header"><h4>Team Members</h4></li>
                <Member />
                <Member />
                <Member />
                
              </ul>

            </div>
    )
  }
}

export default Teammembers
