<template>

  <div v-if="user"> 
  <TopBanner/>
  <form @submit.prevent > 
    <h3 class = "heading"> Please ensure that the photos are in JPEG format !</h3>
  <div class = "before">

    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
    >

    </div>
    <input
      id="beforePhoto"
      ref="fileInput"
      type="file"
      @input="pickFile">
    <h3>Pre-Meal Photo</h3>
  </div>
    <div class = "after">
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImagee})` }"
      >
    
    </div>
    <input
      ref="fileInput2"
      type="file"
      @input="pickFile2">
        <h3>Post-Meal Photo</h3>
  </div>
    <br>
    <input id="uploadButton" type ="submit" value = "Upload Photos" v-on:click="sendtoFB">
    </form>
    <!-- <button @click="sendtoFB">Upload</button> -->
    </div> 
      <div v-else>
    <Login route="" />
  </div>

</template>

<script>

import firebaseApp from '../firebase.js'
import {getFirestore, addDoc, collection} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../views/LoginPage.vue";
import TopBanner from './TopBanner.vue';

const db = getFirestore(firebaseApp)

export default {
    components:{
    Login,
    TopBanner
},
  data() {

      return {
        previewImage: null,
        previewImagee: null,
        user: false,
        Unredeemed : 0
      };
    },
  methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      },
            pickFile2 () {
        let input = this.$refs.fileInput2
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImagee = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      },
            selectImage2 () {
          this.$refs.fileInput2.click()
      },
      sendtoFB() {
        const pic = {
            before: String(this.previewImage),
            after: String(this.previewImagee),
            date: Date.now()
        }
        if(this.previewImage == null || this.previewImagee == null){
            alert("Please upload both images before submitting!")
        }
        else{
        addDoc(collection(db, "users", String(this.user), "pics" ), pic )//String(this.previewImage))
        // let x = getDoc(db,"users",String(this.user))
        // this.Unredeemed = x.Unredeemed
        // console.log(x.Unredeemed)
        // var data = {    
        // Unredeemed: (this.Unredeemed + 1)
}
      },
// const docRef = doc(db, "users", String(this.user));
// updateDoc(docRef, data).then(() => {
//     console.log("Value of an Existing Document Field has been updated");
// })
// .catch(error => {
//     console.log(error);
// })
//         alert("Pictures Successfully Uploaded!")
//         this.previewImage = null
//         this.previewImagee = null
//         }
    

   },
    //   async get(){
    //     let x = getDoc(db,"users",String(this.user))
    //     this.Unredeemed = x.Unredeemed
    //     console.log(x.Unredeemed)

    //   },
    //   update(){
    //     updateDoc(doc(db,"users",this.user),{
    //         ['unredeemed']: this.unredeemed+1
    //     })


    //   }

//   },
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
    // mounted(){
    //    this.update()
    // }

}
</script>

<style scoped lang="scss">
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

.heading {
  margin-top: 200px;
}

.before{
    display: inline-block;
    padding: 100px;
}
.after{
    display: inline-block;
    padding: 100px;
}
.heading{
    text-align: center;
}

#uploadButton {
  background-color: #DFE8CC;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-family: 'Barlow', sans-serif;  font-weight: 700;
  cursor: pointer;
}

.imagePreviewWrapper {
  color: black;
  border-radius: 10px;
  background-color: white; 
}



</style>