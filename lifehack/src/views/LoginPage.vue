<template>
  <body>
    <div id="page">
      <img id="logo" src="@/assets/logo.png" alt="logo" />
      <div id="container">
        <form @submit.prevent="login">
          <div id="email">
            <img id="emailIcon" src="@/assets/email.png" alt="Email Icon" />
            <input
              id="emailField"
              type="email"
              placeholder="Email address..."
              v-model="email"
            />
          </div>
          <br />
          <div id="password">
            <img id="passwordIcon" src="@/assets/password.png" alt="Password Icon" />
            <input
              id="passwordField"
              type="password"
              placeholder="Password..."
              v-model="password"
            />
          </div>
        </form>

        <div id="row">
          <button id="loginBtn" type="submit" v-on:click="submit()">Login</button>
        </div>
        <p>
          <router-link id="registerRouter" to="/register">
            Do not have an account? Register here!
          </router-link>
        </p>
      </div>
    </div>
  </body>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginPage",

  // props: {
  //   route: String,
  // }, testtest

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    submit() {
      let route = "/profiledisplay";
      // if (!this.route) {
      //   route = "/";
      // }

      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Signed in
          console.log("signed in successfully");
          this.$router.push(route);
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    mounted() {
      console.log("the current router is:" + this.route);
    },
  },
};
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
