import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Product extends Component {
  render() {
    return (
      <div>
        <h5>Product</h5>
        <nav><Link to='/product/proda' >product-a</Link> | <Link to='/product/prodb' >product-b</Link></nav>
        <div style={{padding: '10px', border: '1px solid #f00'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
