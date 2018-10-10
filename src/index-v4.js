import React, { PureComponent, createElement } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';


const getAsyncComponent = (load) => (
  class AsyncComponent extends PureComponent {
    componentDidMount() {
      load().then(({default: component}) => {
        this.setState({
          component
        })
      })
    }
    render() {
      const {component} = this.state || {};
      return component ? createElement(component): null;
    }
  }
)

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Link to='/' >Home</Link> | <Link to='/login' >Login</Link> | <Link to='/about' >About</Link>
      </nav>
      <hr/>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={getAsyncComponent(
        () => import(/* webpackChunkName: 'page-login' */ './Login')
      )} />
      <Route path='/about' component={getAsyncComponent(() => import(/* webpackChunkName: 'page-about' */ './About'))} />
    </div>
  </BrowserRouter>
)

ReactDom.render(<App />, document.getElementById('root'));