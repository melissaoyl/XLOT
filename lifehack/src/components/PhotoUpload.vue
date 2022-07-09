<template>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage">
    </div>
 
    <input
      ref="fileInput"
      type="file"
      @input="pickFile">
  </div>

    <button @click="sendtoFB">Upload</button>
</template>
 
<script>
import firebaseApp from '../firebase.js'
import {getFirestore, addDoc, collection} from "firebase/firestore";

const db = getFirestore(firebaseApp)

export default {
  data() {
      return {
        previewImage: null
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
      sendtoFB() {
        const pic = {
            pic: this.previewImage,
            date: Date.now()
        }
        addDoc(collection(db, "users", "thomthom", "pics" ), pic )//String(this.previewImage))
        console.log("done")
      }
  }
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
</style>