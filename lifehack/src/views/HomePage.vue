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
  <br> <br>
  <div id = "aboutCreators">
    <h2>About the Creators</h2>
    <div class="column">
    <div class="card">
      <img src="@/assets/thom.jpg" alt="Thom" style="width:100%">
      <div class="container">
        <h2>Thomas Tan</h2>
        <p class="title">Year 3 BZA</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <a href="http://linkedin.com/in/thomas-t-317010b0" >LinkedIn </a> 
        <a href="https://www.thomastanzy.com" >Website</a>
    
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="@/assets/brian.jpg"  alt="Brian" style="width:100%">
      <div class="container">
        <h2>Brian Lim</h2>
        <p class="title">Year 3 IS</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <a href="http://linkedin.com/in/limyuchaobrian" >LinkedIn </a>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="@/assets/mel.jpg" alt="Mel" style="width:100%">
      <div class="container">
        <h2>Melissa Ong</h2>
        <p class="title">Year 3 BZA</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <a href="http://linkedin.com/in/melissaoyl" >LinkedIn </a>
      </div>
    </div>
  </div>

    <div class="column">
    <div class="card">
      <img src="@/assets/qingyi.jpg"  alt="Qy" style="width:100%">
      <div class="container">
        <h2>Xiang Qingyi</h2>
        <p class="title">Year 3 IS</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <a href="https://www.linkedin.com/in/qingyi-xiang" >LinkedIn </a>
      </div>
    </div>
  </div>
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

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 24%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 50px) {
  .column {
    width: 50%;
    display: block;
  }
}
</style>