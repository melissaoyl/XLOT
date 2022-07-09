<template>

   <div v-if="user"> 
   <TopBanner/>
   <form @submit.prevent > 
         <h3 class = "heading"> Please ensure that the photos are in JPEG format !</h3>
  <div class = "before">
   
    <div
        
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage">
   
    </div>
    <input
      ref="fileInput"
      type="file"
      @input="pickFile">
       <h3>Pre-Meal Photo</h3>
  </div>
    <div class = "before">
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImagee})` }"
      @click="selectImage2">
    
    </div>
    <input
      ref="fileInput2"
      type="file"
      @input="pickFile2">
        <h3>Post-Meal Photo</h3>
  </div>
    <br><br>
    <input id="button" type ="submit" value = "Upload" v-on:click="sendtoFB">
    </form>
    <!-- <button @click="sendtoFB">Upload</button> -->
    </div> 
      <div v-else>
    <Login route="" />
  </div>

</template>
 
<script>

import firebaseApp from '../firebase.js'
import {getFirestore, addDoc, collection, query, where, getDocs, doc, updateDoc} from "firebase/firestore";
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
        Unredeemed: 0

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
        var data = {    
        Unredeemed: (this.Unredeemed + 1)}
        const docRef = doc(db, "users", String(this.user));
updateDoc(docRef, data).then(() => {
    console.log("Value of an Existing Document Field has been updated");
})
.catch(error => {
    console.log(error);
})
    alert("Photo Successfully updated")
}
      },
         async get() {
        const todoRef = collection(db, 'users');
        const x = query(todoRef, where("emailAddress", "==", this.user));
        // let x = await getDocs(todoRef, this.user);

    const querySnapshot = await getDocs(x);
querySnapshot.forEach((doc) => {
    let y = doc.data()
    
    let a = y.Unredeemed;
    this.Unredeemed = a


  // doc.data() is never undefined for query doc snapshots
    console.log(this.Unredeemed)

});

    //     const map = [];
    //     console.log(x)
    //        x.forEach((docs) => {
    //     let s = docs.data();
    //     let before = s.W;
    //     let after = s.A;
    //     let date = s.S;

    //     map.push([date, before, after]);
    //     console.log(map)
    //   });
      }

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
        this.get()

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
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

.before{
    display: inline-block;
    padding: 100px;
}
.after{
    display: inline-block;
}
.heading{
    text-align: center;
}
</style>