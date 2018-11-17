
webpack4.0- 按需加载:
---
1. 关键方法: require.ensure();
2. 两种方式配置路由:
  a. 对象方式配置， 如 index.jsx;
  b. 标签方式配置， 如 entry.jsx。entry.jsx 对应 RouteConf.jsx[推荐使用].

webpack4.0+ 按需加载:
---
1. 关键方法: import(/**/);
2. 需要安装插件 "@babel/plugin-syntax-dynamic-import";
3. 注意 react-router4.0+ 语法.