import React, { Component } from 'react';

import girl from '../../static/images/girl.png';
import avatar from '../../static/images/default_avatar.jpg';

export default class About extends Component {

  componentWillUnmount() {
    console.log(`About component un-mount!`);
  }

  render() {
    return (
      <div>
        <h4>About</h4>
        <hr />
        <br />
        <img src={ avatar } style={{width: '60px', height: '60px', borderRadius: '50%'}} />
        <br/>
        <img src={ girl } />
      </div>
    )
  }
}
