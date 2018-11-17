import React, { Component } from 'react';
import { Link } from 'react-router';

class News extends Component {
  render() {
    return (
      <div>
        <h4>News</h4>
        <hr />
        <br />
        <nav><Link to='/news/newsa' >news-a</Link> | <Link to='/news/newsb' >news-b</Link></nav>
        <div style={{padding: '10px', border: '1px solid #f00'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default News;
