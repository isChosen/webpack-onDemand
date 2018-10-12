import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';


const rootRoute = {
  path: '/',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./App').default);
    }, 'chunk-app');
  },
  indexRoute: {
    getComponent(ns, cb) {
      require.ensure([], require => {
        cb(null, require('./Login').default);
      }, 'chunk-login');
    }
  },
  childRoutes: [
    {
      path: 'home',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./Home').default);
        }, 'chunk-home');
      }
    },
    {
      path: 'product',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./Product').default);
        }, 'chunk-product');
      },
      indexRoute: {
        getComponent(ns, cb) {
          require.ensure([], require => {
            cb(null, require('./ProductA').default);
          }, 'chunk-proda');
        }
      },
      childRoutes: [
        {
          path: 'proda',
          getComponent(ns, cb) {
            require.ensure([], require => {
              cb(null, require('./ProductA').default);
            }, 'chunk-proda');
          }
        },
        {
          path: 'prodb',
          getComponent(ns, cb) {
            require.ensure([], require => {
              cb(null, require('./ProductB').default);
            }, 'chunk-prodb');
          }
        }
      ]
    },
    {
      path: 'about',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./About').default);
        }, 'chunk-about');
      },
      onEnter: handleEnter,
      onLeave: handleLeave
    },
    {
      path: '*',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./NoMatch').default);
        }, 'chunk-nomatch');
      }
    },
  ]
}


// 进入路由 hook
function handleEnter(o) {
  console.log(`enter -> ${o.location.pathname}`)
}
// 离开路由 hook
function handleLeave(T) {
  console.log(`leave -> ${T.location.pathname}`);
}

ReactDom.render(
  <Router routes={rootRoute} history={browserHistory} />,
  document.getElementById('root')
)
