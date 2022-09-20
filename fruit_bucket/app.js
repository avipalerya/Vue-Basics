let app = Vue.createApp({
  data() {
    return {
      newFruitValue: "",
      fruits: ["apple", "mango", "lichie"],
    };
  },
  methods: {
    addFruit() {
      console.log("fruit entered", this.newFruitValue);
      this.fruits.push(this.newFruitValue);
      //reset input field
      this.newFruitValue = "";
    },
    removeFruit(idx) {
      //   console.log("selceted index", idx);
      this.fruits.splice(idx, 1);
    },
  },
});
app.mount("#fruitBucket");
