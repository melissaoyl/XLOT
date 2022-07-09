<template>
    <div id="main">
        <div id="header">
        <img id="logo" src="@/assets/logo.png" alt="logo" />
        <h2 id="welcome">Welcome Back {{ this.name }} !</h2>
        <button id="profileBtn" type="button" @click="goToProfile()">
            Your Profile
        </button>
        <button id="uploadBtn" type="button" @click="goToUpload()">
            Upload Your Plate
        </button>
        </div>
        <div id="logoutButton">
        <LogOut />
        </div>
    </div>
    <div id="logoutButton">
        <LogOut />
    </div>
    <br />
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection, where, query} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LogOut from "./LogOut.vue";
const db = getFirestore(firebaseApp);


export default {
  name: "TopBanner",
  components: {
    LogOut,
  },

  data() {
    return {
      user: false,
      name: ""
    };
  },

  beforeMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("this is true");
        this.user = auth.currentUser.email;
        console.log(this.user);
        this.get()
      } else {
        this.user = false;
      }
    });
  },

  methods: {
    goToProfile() {
      this.$router.push("/profiledisplay");
    },

    goToUpload() {
      this.$router.push("/photoupload");
    },
    async get() {
        const todoRef = collection(db, 'users');
        const x = query(todoRef, where("emailAddress", "==", this.user));
    const querySnapshot = await getDocs(x);
querySnapshot.forEach((doc) => {
    let y = doc.data()
    let a = y.fullName;
    this.name = a
});
      },
  },
};
</script>

<style scoped>
#logo {
  float: left;
}
h2 {
  color: white;
}

#main {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0;
  border-bottom: 3px darkgrey solid;
  box-shadow: 0px 0px 2px 0px;
  background-color: #7baf7d;
}

#welcome {
  display: inline-block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

@media all and (max-width: 900px) {
  #welcome {
    display: inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
}

@media all and (max-width: 900px) {
  #welcome {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: inline-block;
    padding: 5px 200px 0px 200px;
    /* display:none;
        visibility: hidden; */
  }
}

#profileBtn,
#uploadBtn {
  background-color: #7baf7d;
  border: none;
  border-radius: 10px;
  padding: 7px;
  padding-left: 40px;
  padding-right: 25px;
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-decoration: underline;
}

#logoutButton {
  position: fixed;
  right: 1%;
  top: 0;
  padding: 10px;
  background-color: #7baf7d;
}

#logo {
  width: 100px;
  margin-left: 20px;
}
</style>
