import React, { PureComponent, createElement } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App_v3';
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

const routes = (
  <Route>
      <Route path='/' component={App} />
      <IndexRoute to='home' />
      <Route path='home' component={getAsyncComponent(() => import(/* webpackChunkName: 'page-home' */ './Home'))} />
      <Route path='login' component={getAsyncComponent(() => import(/* webpackChunkName: 'page-login' */ './Login'))} />
      <Route path='about' component={getAsyncComponent(() => import(/* webpackChunkName: 'page-about' */ './About'))} />
  </Route>
)

ReactDom.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
)