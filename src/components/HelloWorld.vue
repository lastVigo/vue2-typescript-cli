<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org"
           target="_blank">Core Docs</a>
      </li>

      <li>
        <a href="https://forum.vuejs.org"
           target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org"
           target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs"
           target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/"
           target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul v-for="(item, index) in datas"
        :key="index">
      <li>
        <a :href="item.href"
           :tareget="item.target"
           v-text="item.name"></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Component from 'vue-class-component'
import { Component, Prop } from 'vue-property-decorator'
import DataDefine from '../ddd/DataDefine'

@Component
export default class HelloWorld extends Vue {
  name: string = 'HelloWorld'
  msg: string = 'Welcome to Your Vue.js App'
  @Prop({ type: Array, required: true })
  datas: Array<DataDefine> = []
  // datas: Array<DataDefine> = [];
  // mounted () {

  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
