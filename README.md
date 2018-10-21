# react-sail

`react`的种子工程, 采用`typescript`编写。基于[create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)生成的应用而深度定制。

## 快速开始

```bash
yarn
yarn start
```

## 特性

+ `antd`作为UI库，并配置按需加载、自定义主题等
+ 整体结构按功能组织
+ `mobx`作为状态管理工具
+ `react-loadable`实现组件级别(包含路由)的按需加载
+ 封装`fetch`用于前后端数据交互
+ 支持`less module`(文件名称限定为 `[name].module.less`)
+ 支持多页
+ `pwa`
+ 权限控制与路由守卫
+ ...

## 生产环境

### 构建

```bash
yarn build
```

### CI command

```bash
#!/bin/bash
echo 'start...'
rm -rf node_modules
yarn install
yarn run build
docker stop react-sail
docker rm react-sail
docker rmi react-sail:1.4
docker build -t react-sail:1.4 .
docker run --name react-sail -p 8181:80 -d react-sail:1.4
echo 'finished'
exit 0
```

## 按功能组织

## 权限控制

## 主题设置

[themes]('./themes')目录下配置antd主题

## 计划

+ 在线主题切换
+ 支持服务端渲染
+ ...
