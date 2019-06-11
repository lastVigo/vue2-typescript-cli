<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld :datas="datas"/>
  </div>
</template>

<script lang="ts">

import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import Component from 'vue-class-component'
import DataDefine from './ddd/DataDefine'

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  name='App';
  // components: {
  //   HelloWorld
  // }
  datas: Array<DataDefine> = [];
  mounted () {
    this.datas.push(new DataDefine('vue-router', 'http://router.vuejs.org/', '_blank'))
    this.datas.push(new DataDefine('vuex', 'http://vuex.vuejs.org/', '_blank'))
    this.datas.push(new DataDefine('vue-loader', 'http://vue-loader.vuejs.org/', '_blank'))
    this.datas.push(new DataDefine('awesome-vue', 'https://github.com/vuejs/awesome-vue', '_blank'))
    this.datas.push(new DataDefine('百度', 'https://www.baidu.com', '_blank'))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
