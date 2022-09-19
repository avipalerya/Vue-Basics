let app = Vue.createApp({
  //all data present here
  data() {
    return {
      greeting: "Hello World",
      learn: "<h1>Learn VUE</h1>",
      code: "Code VUE",
    };
  },
  //inside methods options,create all the methods
  methods: {
    randomOutput() {
      //   console.log("randomOutput executed");
      let randomNum = Math.random();
      console.log("randomNum", randomNum);
      if (randomNum < 0.5) {
        return this.learn;
      } else {
        return this.code;
      }
    },
  },
});
app.mount("#first");
