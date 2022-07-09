<template>
  <img src="@/assets/logo.png" />
  <h1>Welcome to XLOT</h1>
  <div class="info">
    <h2> In 2019, Singapore generated around 744 million kg of food waste. In a bid to reduce this food waste we launched XLOT to help to raise awareness How can we tackle this growing problem
    and encourage Singaporeans to cut down on
    unnecessary food waste?</h2>
  </div>
  <div id = "getStarted">
    <button id = "getStartedButton" @click="goToLogin">Start Finishing Your Food Now!</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');

h1 {
  font-size: 2.5em;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}

.info {
  background: #edfaf0;
  margin-top: 30px;
  margin-bottom: 150px;
  margin-right: 40px;
  margin-left: 120px;
  border: 3px solid #436c50;
  border-radius: 20px;
}

#getStartedButton {
    background-color: #e6f8ea;
    border: none;
    border-radius: 10px;
    padding: 7px;
    padding-left: 25px;
    padding-right: 25px;
    cursor: pointer;
    font-family: 'Barlow', sans-serif;  
    font-weight: 700;
    font-size: 1.2em;
    text-decoration: underline;
}
</style>