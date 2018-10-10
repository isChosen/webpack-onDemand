import React, { PureComponent, createElement } from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

import Home from './Home';


function getAsyncComponent(load) {
  return class AsyncComponent extends PureComponent {
    componentDidMount() {
      load().then(({default: component}) => {
        this.setState({
          component
        })
      })
    }
    render() {
      const {component} = this.state;
      return component ? createElement(component): null;
    }
  }
}

function App() {
  return (
    <HashRouter>
      <div>
        <nav>
          <Link to='/' >Home</Link> | <Link to='/about' >About</Link> | <Link to='/login' >Login</Link>
        </nav>
        <hr/>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={getAsyncComponent(
          () => import(/* webpackChunkName: 'page-login */ './Login')
        )} />
        <Route path='/about' component={getAsyncComponent(
          () => import(/* webpackChunkName: 'page-about */ './About')
        )} />
      </div>
    </HashRouter>
  )
}

ReactDom.render(<App/>, document.getElementById('root'));