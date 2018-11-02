/*
 * @Author: Chosen 
 * @Date: 2018-11-02 17:08:04 
 * @Last Modified by: Chosen
 * @Last Modified time: 2018-11-02 17:08:34
 * @Descriptions 对象形式
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';


const rootRoute = {
  path: '/',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./components/App').default);
    }, 'chunk-app');
  },
  indexRoute: {
    getComponent(ns, cb) {
      require.ensure([], require => {
        cb(null, require('./components/Login').default);
      }, 'chunk-login');
    }
  },
  childRoutes: [
    {
      path: 'home',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./components/Home').default);
        }, 'chunk-home');
      }
    },
    {
      path: 'product',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./components/Product').default);
        }, 'chunk-product')
      }
    },
    {
      path: 'product/:id',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./components/ProductDetail').default);
        }, 'chunk-prodetail')
      }
    },
    {
      path: 'news',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./components/News').default);
        }, 'chunk-news');
      },
      indexRoute: {
        getComponent(ns, cb) {
          require.ensure([], require => {
            cb(null, require('./components/NewsA').default);
          }, 'chunk-newsa');
        }
      },
      childRoutes: [
        {
          path: 'newsa',
          getComponent(ns, cb) {
            require.ensure([], require => {
              cb(null, require('./components/NewsA').default);
            }, 'chunk-newsa');
          }
        },
        {
          path: 'newsb',
          getComponent(ns, cb) {
            require.ensure([], require => {
              cb(null, require('./components/NewsB').default);
            }, 'chunk-newsb');
          }
        },
      ]
    },
    {
      path: 'about',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./components/About').default);
        }, 'chunk-about');
      },
      onEnter: handleEnter,
      onLeave: handleLeave
    },
    {
      path: '*',
      getComponent(ns, cb) {
        require.ensure([], require => {
          cb(null, require('./components/NoMatch').default);
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
