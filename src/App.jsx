import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h4>Our React Router 3 App</h4>
          <nav><Link to='/home' >Home</Link> | <Link to='/product' >Product</Link> | <Link to='/about' >About</Link></nav>
        </header>
        <section
          style={{
            padding: '10px 5px',
            margin: '10px 0',
            minHeight: '200px',
            border: '1px solid #999',
            background: '#f7f7f7'
          }}>
          { this.props.children }
        </section>
        <footer>
          <h4>footer</h4>
        </footer>
      </Fragment>
    );
  }
}

export default App;