import React, { Component } from 'react';

import reactPng from '../../styles/images/react.png'
import nodePng from '../../styles/images/node.png'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="React" >
          <img className="react-png" src={reactPng} width="275px" height="200px" />
        </div>
        <div className="Node" >
          <img className="node-png" src={nodePng} width="275px" height="275px" />
        </div>
      </div>
    )
  }
}

export default Main;
