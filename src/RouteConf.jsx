const Login = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/Login').default);
  }, 'chunk-login');
}
const Home = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/Home').default);
  }, 'chunk-home');
}
const Product = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/Product').default);
  }, 'chunk-product');
}
const ProductDetail = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/ProductDetail').default);
  }, 'chunk-prodetail');
}
const News = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/News').default);
  }, 'chunk-news');
}
const NewsA = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/NewsA').default);
  }, 'chunk-newsa');
}
const NewsB = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/NewsB').default);
  }, 'chunk-newsb');
}
const About = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/About').default);
  }, 'chunk-about');
}
const NoMatch = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/NoMatch').default);
  }, 'chunk-nomatch');
}

// 进入路由 hook
const handleEnter = (o) => {
  console.log(`enter -> ${o.location.pathname}`)
}
// 离开路由 hook
const handleLeave = (T) => {
  console.log(`leave -> ${T.location.pathname}`);
}

export {
  Login,
  Home,
  Product,
  ProductDetail,
  News,
  NewsA,
  NewsB,
  About,
  NoMatch,
  handleEnter,
  handleLeave
}