<template>
    <div id="main">
        <div id ="header">
            <h2 id="welcome">Welcome Back {{this.user}} !</h2>
            <button id="profileBtn" type=button @click="goToProfile()">Profile</button>
            <button id="uploadBtn" type=button @click="goToUpload()">Upload</button>
        </div>
        <div id ="logoutButton">
            <LogOut />
        </div>
    </div>
    <br>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LogOut from "./LogOut.vue";

export default {
    name: "TopBanner",
    components: {
        LogOut,
    },

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
        this.getScores()

    }
    else{
        this.user = false
    }
    })
    },

    methods: {
        goToProfile() {
            this.$router.push("/profiledisplay");
        },

        goToUpload() {
            this.$router.push("/photoupload");
        },
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
    background-color: #446A46;
}

#welcome {
    display:inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

@media all and (max-width: 900px) {
    #welcome {
        display:inline-block;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
}

@media all and (max-width: 900px) {
    #welcome {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        display:inline-block;
        padding: 5px 200px 0px 200px;
        /* display:none;
        visibility: hidden; */
    }
}

#profileBtn , #uploadBtn {
    background-color: #446A46;
    border: none;
    border-radius: 10px;
    padding: 7px;
    padding-left: 40px;
    padding-right: 25px;
    cursor: pointer;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: white;
}

#logoutButton {
    position: fixed;
    right: 1%;
    top: 0;
    padding: 10px;
    background-color: #446A46;
}

</style>
