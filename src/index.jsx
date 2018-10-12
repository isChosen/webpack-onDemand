import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';


const routes = {
  path: '/',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./App').default);
    }, 'chunk-app');
  },
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./Login').default);
      }, 'chunk-login');
    }
  },
  childRoutes: [
    {
      path: 'home',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require('./Home').default);
        }, 'chunk-home');
      }
    },
    {
      path: 'product',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require('./Product').default);
        }, 'chunk-product');
      },
      indexRoute: {
        getComponent(nextState, cb) {
          require.ensure([], require => {
            cb(null, require('./ProductA').default);
          }, 'chunk-proda');
        }
      },
      childRoutes: [
        {
          path: 'proda',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./ProductA').default);
            }, 'chunk-proda');
          }
        },
        {
          path: 'prodb',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./ProductB').default);
            }, 'chunk-prodb');
          }
        }
      ]
    },
    {
      path: 'about',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require('./About').default);
        }, 'chunk-about');
      },
      onEnter: handleEnter,
      onLeave: handleLeave
    },
    {
      path: '*',
      getComponent(nextState, cb) {
        require.ensure([], require => {
          cb(null, require('./NoMatch').default);
        }, 'chunk-nomatch');
      }
    },
  ]
}

// 进入路由的 hook
function handleEnter(o) {
  console.log(`enter -> ${o.location.pathname}`)
}
// 离开路由的 hook
function handleLeave(T) {
  console.log(`leave -> ${T.location.pathname}`);
}

ReactDom.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
)
