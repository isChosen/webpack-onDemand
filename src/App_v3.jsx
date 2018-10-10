import React, { Component } from 'react';
import { Link } from 'react-router';

class App_v3 extends Component {
  render() {
    return (
      <div className="primary-layout">
        <header>
          <h3>Our React Router 3 App</h3>
          <nav>
            <Link to='/' >Home</Link> | <Link to='/login' >Login</Link> | <Link to='/about' >About</Link>
          </nav>
        </header>
        <hr />
        <main>{ this.props.children }</main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App_v3;