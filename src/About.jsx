import React, { Component } from 'react'

export default class About extends Component {

  componentWillUnmount() {
    console.log(`About component un-mount!`);
  }

  render() {
    return (
      <div>
        About
      </div>
    )
  }
}
