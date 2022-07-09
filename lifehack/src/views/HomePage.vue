<template>
  <img src="@/assets/logo.png" />
  <h1>Welcome to XLOT</h1>
  <div class="info">
<h2> In 2019, Singapore generated around 744 million kg of
food waste. In a bid to reduce this food waste we launched XLOT to help to raise awareness and help to cultivate the habit of reducing our own food wastage. Our team felt that 
reducing our personal food wastage is one of the best ways in which we could individually impact our gloabl effort towards a greener Earth.</h2>

<h2>What is XLOT? XLOT is an application we created which helps to keep ourselves accountable for finishing our food. XLOT implements a simple mechanism which requires the participant to upload 
    their own plates/bowls at the beginning of their meal and at the end of the meal to keep themselves accountable to wasting as little food as possible during each meal. As a reward, with each upload,
    participants stand a chance to redeem one of 5 stickers, Willy, Abi, Sally, Tye and Era (WASTE). Whenever a user successfully collects at least one of each sticker, the participate would be eligible for a 
    very generous cash reward, redeemable via Paynow or Paylah!
</h2>
<table id="counter_table" width="100%">
      <tr>
        <th>Willy</th>
        <th>Abi</th>
        <th>Sally</th>
        <th>Tye</th>
        <th>Erra</th>
      </tr>
      <tr>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/willy.png" />
        </td>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/abi.png" />
        </td>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/sally.png" />
        </td>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/tye.png" />
        </td>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/erra.png" />
        </td>
      </tr>
    </table>
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
  margin-bottom: 50px;
  margin-right: 40px;
  margin-left: 120px;
  border: 3px solid #436c50;
  border-radius: 20px;
  padding: 30px;
}

#getStartedButton {
    background-color: #c1ecca;
    border: none;
    border-radius: 10px;
    padding: 7px;
    padding: 30px;
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

@media screen and (max-width: 50px) {
  .column {
    width: 50%;
    display: block;
  }
}

#aboutCreators {
  margin-top: 50px;
}

</style>