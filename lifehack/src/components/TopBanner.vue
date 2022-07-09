<template>
    <div id="main">
        <!-- <a href = "/home" > <img id ="logo" src="../assets/eduLogo.png" alt="EDU'skool logo" > </a> -->
        <h2 id="welcome">Welcome Back {{this.user}} </h2>
        <a id="profile" href="./profile">Profile</a>
        <a id ="upload" href="./PhotoUpload">Upload</a>
        <!-- <a id="logout" href="./" @click="handleLogout">Logout</a> -->
        <!-- <a id="profile" href="./profile">Profile</a> -->
    </div><br><br>
</template>

<script>

import { getAuth, onAuthStateChanged } from "firebase/auth";



export default {

  data() {
      return {
        user: false
      };
    },
             beforeMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("this is true");
        this.user = auth.currentUser.email;
        console.log(this.user)


      }
      else{
        this.user = false
      }
    })
    }
}

</script>

<style scoped>
#logo {
    float:left;
}
h2 {
    color: white;
}

#main {
    position:fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
    border-bottom: 3px darkgrey solid;
    box-shadow: 0px 0px 2px 0px;
    background-color: #00bcd4;
}

#welcome {
    display:inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
#help {
    float:right;
    position: relative;
    top: 20px;
    right: 200px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
#logout{
    float:right;
    position: relative;
    top: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

@media all and (max-width: 900px) {
    #welcome {
        display:inline-block;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    #help {
        float:right;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        visibility: hidden;
    }
    #logout{
        float:right;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        visibility: hidden;
    }
}


a {
    color: white;
    font-size: 24px;
}

a:hover {
    color: #fb8332;
}


@media all and (max-width: 900px) {
    #courses {
        display:inline-block;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        /* display:none;
        visibility: hidden; */
    }
    #welcome {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        display:inline-block;
        padding: 5px 200px 0px 200px;
        /* display:none;
        visibility: hidden; */
    }
    #help {
        display:inline-block;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        /* display:none;
        visibility: hidden; */
    }
}

</style>
