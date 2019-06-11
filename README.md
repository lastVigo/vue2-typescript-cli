# vue2-typescript-cli
## 说明
在vue-cli（2.9.6，注意不是针对vue3的版本）生成的项目基础上进行了修改，形成这个项目。
## 修改的目的
**提供一个vue+typescript+vscode进行项目开发的模版项目。**

最初的目的是想写一个用于开发调试的程序，本来计划用 vue+Electron，因为有大量的固定格式的json数据要处理，所以需要引入typescript的强类型，于是就需要用到vue+Electron+typescript的组合开发。因为有[electron-vue](https://github.com/SimulatedGREG/electron-vue)这样的项目，所以想当然认为不难，实际上做起来碰到很多问题，索性退而求其次，能做到vue+typescript 就好了。
## 修改了什么？
在[这篇博客](https://www.cnblogs.com/wisewrong/p/8570309.html)中能找到绝大多数内容,至于对vscode开发环境做的配置，在`.vscode`文件夹中都能找到，你额外需要做的应该只有给vscode安装vetur插件。
## 效果如何？
支持像（仅仅是像）面向对象一样写vue的模版，支持强类型也是必须的。项目中第二个列表是采用范型传参，通过v-for指令渲染出来的。

编码阶段和编译阶段支持eslint standard编码规范，ts语法要求，自动更正不合规的写法，编辑器语法提示，提高开发效率。

## 为什么没用vue3？
vue-cli的最新版本应该可以替代这个项目，但此时，vue3尚未发布，怕踩坑。就这样了。
# 下面不是我写的，是原来的

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


