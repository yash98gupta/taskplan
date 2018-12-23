import React, { Component } from 'react'
import Projectposts from './Projectposts'
import Subject from '../query/Subject'
import Files from '../query/Files'
import Message from '../query/Message'

class Projectquery extends Component {
  render() {
    return (

      <div class="col l8 right right_dashboard">

                <div class="col l8 dashboard_card">
                  <a class="task_headline">Alchemy2018</a>
                </div>

                <div class="col l10 width_hundred">
                    <div class="card z-depth-2">
                          <div class="card-content">
                            <Subject />
                            <Message />
                            <Files />
                        </div>
                    </div>
                </div>

                <Projectposts />
                <Projectposts />
                <Projectposts />
        </div>
    )
  }
}

export default Projectquery
