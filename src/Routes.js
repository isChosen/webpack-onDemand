

module.exports = {
  app: {
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./App').default);
      }, 'chunk-app');
    }
  },
  login: {
    // path: 'login',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./Login').default);
      }, 'chunk-login');
    }
  },
  home: {
    // path: 'home',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./Home').default);
      }, 'chunk-home');
    }
  },
  product: {
    // path: 'product',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./Product').default);
      }, 'chunk-product');
    }
  },
  productA: {
    // path: 'proda',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./ProductA').default);
      }, 'chunk-proda');
    }
  },
  product: {
    // path: 'prodb',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./ProductB').default);
      }, 'chunk-prodb');
    }
  },
  about: {
    // path: 'about',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./About').default);
      }, 'chunk-about');
    }
  },
  wildcard: {
    // path: '*',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./NoMatch').default);
      }, 'chunk-nomatch');
    }
  },
}
