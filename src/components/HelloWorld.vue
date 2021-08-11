<template>
  <div class="hello">
    <button v-on:click="callSamplePostMethod">POST click</button>
    <button v-on:click="callSampleGETMethod">GET click</button>
  </div>
</template>

<script>
import HelloWorldService from "../Service/HelloWorldService.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mixins: [HelloWorldService],
  data() {
    return {};
  },
  methods: {
    callSamplePostMethod() {
      console.log("method called");

      var reqJSON = {
        name: "Bokaro",
      };
      this.postData(reqJSON).then((response) => {
        console.log(JSON.stringify(response));
      });
      console.log("method called 2");
    },

    callSampleGETMethod() {
      this.getData().then((response) => {
        console.log(JSON.stringify(response));
      });
      console.log("method called 2");
    },
  },
};
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
