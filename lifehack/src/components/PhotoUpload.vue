<template>
    <form @submit.prevent > 
        <br><br>
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
</template>

<script>
import firebaseApp from '../firebase.js'
import {getFirestore, addDoc, collection} from "firebase/firestore";

const db = getFirestore(firebaseApp)

export default {
  data() {
      return {
        previewImage: null,
        previewImagee: null
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
        addDoc(collection(db, "users", "thomthom", "pics" ), pic )//String(this.previewImage))
        console.log("done")
        alert("Pictures Successfully Uploaded!")
        this.previewImage = null
        this.previewImagee = null
        }
    

      },

  }
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