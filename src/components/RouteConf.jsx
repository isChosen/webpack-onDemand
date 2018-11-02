/*
 * @Author: Chosen 
 * @Date: 2018-11-02 15:46:11 
 * @Last Modified by: Chosen
 * @Last Modified time: 2018-11-02 16:00:35
 */

const Login = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./Login').default);
  }, 'chunk-login');
}
const Home = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./Home').default);
  }, 'chunk-home');
}
const Product = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./Product').default);
  }, 'chunk-product');
}
const ProductDetail = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./ProductDetail').default);
  }, 'chunk-prodetail');
}
const News = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./News').default);
  }, 'chunk-news');
}
const NewsA = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./NewsA').default);
  }, 'chunk-newsa');
}
const NewsB = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./NewsB').default);
  }, 'chunk-newsb');
}
const About = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./About').default);
  }, 'chunk-about');
}
const NoMatch = (ns, cb) => {
  require.ensure([], require => {
    cb(null, require('./NoMatch').default);
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