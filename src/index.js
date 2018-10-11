import React, { PureComponent, createElement } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { getAsyncComponent as getComponent, asyncComponent } from './util';

import App from './App';
import Login from './Login';

// 进入路由的 hook
const handleEnter = (o) => {
  console.log('o -> enter ', o);
}
// 离开路由的 hook
const handleLeave = (T) => {
  console.log('T -> leave ', T);
}

const Home = getComponent(() => import(/* webpackChunkName: 'page-home' */ './Home'));
const Product = getComponent(() => import(/* webpackChunkName: 'page-home' */ './Product'));
const ProductA = getComponent(() => import(/* webpackChunkName: 'page-home' */ './ProductA'));
const ProductB = getComponent(() => import(/* webpackChunkName: 'page-home' */ './ProductB'));
const About = getComponent(() => import(/* webpackChunkName: 'page-home' */ './About'));

const routes = (
    <Route path='/' component={App} >
      <IndexRoute component={Login} />
      <Route path='home' component={Home} />
      <Route path='product' component={Product} >
        {/* <IndexRoute component={ProductA} /> */}
        <Route path='proda' component={ProductA} />
        <Route path='prodb' component={ProductB} />
      </Route>
      <Route path='about' onEnter={handleEnter.bind(this)} onLeave={handleLeave.bind(this)} component={About} />
  </Route>
)

ReactDom.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
)
