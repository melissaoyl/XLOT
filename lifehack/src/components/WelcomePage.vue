<template>
<h1>Welcome to XLOT</h1>
<h2> In 2019, Singapore generated around 744 million kg of
food waste. In a bid to reduce this food waste we launched XLOT to help to raise awareness and help to cultivate the habit of reducing our own food wastage. Our team felt that 
reducing our personal food wastage is one of the best ways in which we could individually impact our gloabl effort towards a Green-er Earth.</h2>

<h2>What is XLOT? XLOT is an applicatio we created which helps to keep ourselves accountable for finishing our food. XLOT implements a simple mechanism which involes the participant to upload 
    their own plates/bowls at the beginning of their meal and at the end of the meal to keep themselves accountable to wasting as little food as possible during each meal. As a reward, with each upload,
    participants stand a chance to redeem one of 5 stickers, Willy, Abi, Sally, Tye and Era, whenever a user successfully collects at least one of each sticker, the participate would be eligible for a 
    very generous cash reward, redeemable via Paynow or Paylah!
</h2>
    <table id="counter_table" width="100%">
      <tr>
        <th><b>W</b>illy</th>
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
</template>

<script>


export default {
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");

body {
  background-color: #e6f8ea;
  width: 100vw;
  height: 100vh;
}

p {
  text-align: center;
  margin-left: 0%;
  margin-right: 0%;
}

#logo {
  width: 200px;
  display: block;
  margin: 0 auto;
}

#emailIcon,
#passwordIcon {
  width: 30px;
  height: 30px;
  margin: 10px;
}

#email,
#password {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-bottom: 10px;
}

#loginBtn {
  background-color: #dfe8cc;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-family: 'Barlow', sans-serif;  font-weight: 700;
  cursor: pointer;
}

#registerRouter {
  color: #000000;
  font-family: "Barlow", sans-serif;
  font-size: 14px;
}

#emailField,
#passwordField {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    /* padding: 12px 20px;
  width: 225px;
  height: 40px; */
  /* outline: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box; */
  /* text-indent: 10px;
  margin: auto 7px auto 2px; */
}

#page {
  background-color: #ffffff;
  /* height: 600px;
  width: 600px; */
  margin: 10% 20% auto;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  padding: 20px;
}

#container {
  width: 60%;
  height: auto;
  margin: 50px auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto 30px auto 30px;
}
</style>
