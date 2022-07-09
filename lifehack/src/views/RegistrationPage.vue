<template>
    <div id="page">
        <img id="logo" src="@/assets/logo.png" alt="logo" />
    
    <h1> Create A New Account</h1>
    <br>
        <div class="container">
            <form id="userRegistration">
                <div class="registerForm">
                    <label for="fullName">Full Name: </label>
                    <input
                        type="text"
                        id="fullName"
                        required=""
                        placeholder="Enter your Full Name"
                    />
                    <br /><br />

                    <label for="mobileNum">Mobile Number: </label>
                    <input
                        type="tel"
                        id="mobileNum"
                        required=""
                        placeholder="Enter your Mobile Number"
                    />
                    <br /><br />

                    <label for="emailAddress">Email Address: </label>
                    <input
                        type="email"
                        id="emailAddress"
                        required=""
                        placeholder="Enter your Email"
                    />
                    <br /><br />

                    <label for="setPassword">Password: </label>
                    <input
                        type="password"
                        id="setPassword"
                        required=""
                        placeholder="Enter your Password"
                    />
                    <br /><br />

                    <label for="repeatPassword">Repeat Password: </label>
                    <input
                        type="password"
                        id="repeatPassword"
                        required=""
                        placeholder="Enter your Password again"
                    />
                </div>
                <br />
            <div class="signUp">
                <button
                    id="signUpButton"
                    type="button"
                    v-on:click="checkForm()"
                >
                    Sign Up 
                </button>
            </div>
        </form>
        <br />
        <div id="loginLink">
            <router-link to="/"> Already have an account? Login here! </router-link>
        </div>
    </div>
    </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore, setDoc, doc} from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
    name: "RegistrationPage",

    data() {
        return {
            email: "",
            password: "",
        }
    },

    methods: {
        checkForm() {
            const auth = getAuth();
            var fullName = document.getElementById("fullName").value;
            var mobileNum = document.getElementById("mobileNum").value;
            var emailAddress = document.getElementById("emailAddress").value;
            var userPassword = document.getElementById("setPassword").value;
            var repeatPassword = document.getElementById("repeatPassword").value;
            if (fullName == "") {
                alert("Please enter your full name");
            } else if (mobileNum == "") {
                alert("Please enter your mobile number");
            } else if (emailAddress == "") {
                alert("Please enter your email address");
            } else if (userPassword == "") {
                alert("Please enter your password");
            } else if (repeatPassword == "") {
                alert("Please enter your password again");
            } else if (userPassword != repeatPassword) {
                alert("Passwords do not match");
            } else {
                try {
                    createUserWithEmailAndPassword(auth, emailAddress, userPassword)
                        .then(() => {
                            // Signed in
                            console.log("signed in successfully");
                            // var uid = auth.currentUser.uid;
                            setDoc(doc(db, "users", emailAddress), {
                                fullName: fullName,
                                mobileNum: mobileNum,
                                emailAddress: emailAddress,
                                userPassword: userPassword,
                            });
                            document.getElementById("userRegistration").reset();
                        })
                        .catch((error) => {
                            alert(error.message);
                        });
                } catch (error) {
                    console.error("Error adding document: ", error);
            }
        }
    }
    }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');

h1 {
    background-color: #ffffff;
    font-size: 20px;
}

label {
    display: inline-block;
    width: 150px;
    margin-right: 5px;
    text-align: right;
}

#logo {
    width: 200px;
    margin: auto;
    display: block;
}

#loginPromptRouter {
    text-align: center;
    margin-top: 20px;
}

#page {
    background-color: #ffffff;
    /* height: 600px;
    width: 600px; */
    margin: 10% 20% auto;
    border-radius: 1.5em;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    padding: 25px;
}

#signUpButton {
    background-color: #DFE8CC;
    border: none;
    border-radius: 10px;
    padding: 7px;
    padding-left: 25px;
    padding-right: 25px;
    cursor: pointer;
    font-family: 'Barlow', sans-serif;  font-weight: 700;    font-weight: 700;
}

#nav {
    padding: 30px;
}

#fullName, #mobileNum, #emailAddress, #setPassword, #repeatPassword {
    width: 40%;
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
    margin-left: 46px;
    text-align: center;
    margin-bottom: 5px;
    font-family: 'Ubuntu', sans-serif;
}

</style>