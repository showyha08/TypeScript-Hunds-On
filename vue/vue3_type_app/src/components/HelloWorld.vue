<template>
    <h1 class="bg-info text-white p-2">{{ msg }}</h1>
    <div class="container">
      <h2 class="my-3">number counter.</h2>
      <div class="alert alert-info">
        <h3 v-on:click="doAction">{{val}} count.</h3>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HelloWorld extends Vue {
  msg!: string
  val = 1

  doAction():void {
    this.val += 1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
