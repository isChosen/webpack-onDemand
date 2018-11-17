import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';

import appLess from '../../static/less/app.less';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className={appLess.header} >
          <b>Our React Router App</b>
          <nav><Link to='/home' >Home</Link> | <Link to='/product' >Product</Link> | <Link to='/news' >News</Link> | <Link to='/about' >About</Link></nav>
        </header>
        <section className={appLess.section} >
          { this.props.children }
        </section>
        <footer className={appLess.footer} >
          <b>footer</b>
        </footer>
      </Fragment>
    );
  }
}

export default App;