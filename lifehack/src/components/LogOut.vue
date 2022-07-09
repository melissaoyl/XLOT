<template>
    <button id="btn" @click="signOut()" v-if="user">Logout</button>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
    name: "LogOut",

    data() {
        return {
        user: false,
        };
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.user = user;
        }
        });
    },

    methods: {
        signOut() {
        const auth = getAuth();
        const user = auth.currentUser;
        signOut(auth, user);
        this.$router.push({ name: "LoginPage" });
        },
    },
    };
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");

    #btn {
        background-color: #446A46;
        border: none;
        text-decoration: underline;
        cursor: pointer;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 15px;
        color: white;
        margin-right: 1%;
    }

    #btn:hover {
        font-weight: bold;
    }
</style>
