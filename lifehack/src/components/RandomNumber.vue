<template>
       

<div v-if="this.value==1">
   <img style="width: 200px; height: 200px" src="@/assets/willy.png"  @click="updateInternal(1);updateFB()"/>
</div>
<div v-else-if="this.value==2">
            <img style="width: 200px; height: 200px" src="@/assets/abi.png" @click="updateInternal(2);updateFB()" />
</div>
<div v-else-if="this.value==3">
       <img style="width: 200px; height: 200px" src="@/assets/sally.png"  @click="updateInternal(3);updateFB()"/>
</div>
<div v-else-if="this.value==4">
         <img style="width: 200px; height: 200px" src="@/assets/Tye.png"  @click="updateInternal(4);updateFB()"/>
</div>
<div v-else-if="this.value==5">
     <img style="width: 200px; height: 200px" src="@/assets/Tye.png"  @click="updateInternal(5);updateFB()"/>
</div>
<div v-else>
  <button id ="redeemBtn" @click="random_value">Click to try!</button> 
</div>
  
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore, getDocs, collection, where, query, doc, updateDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp)

export default {
    data(){
        return {
            value: 0,
            Unredeemed: 0,
            w: 0,
            a: 0,
            s: 0,
            t: 0,
            e: 0,
            
        }
    },
    methods:{
        random_value(){
            if (this.Unredeemed == 0){
                alert ("You have no more Unredeemed left")
            }
            else{
            this.value = Math.floor((Math.random() * 5) + 1)
            }
        },
         async get() {
        const todoRef = collection(db, 'users');
        const x = query(todoRef, where("emailAddress", "==", this.user));
    const querySnapshot = await getDocs(x);
querySnapshot.forEach((doc) => {
    let y = doc.data()
    let a = y.Unredeemed;
    this.Unredeemed = a
    this.w = y.W
    this.a = y.A 
    this.s = y.S 
    this.t = y.T 
    this.e = y.E
    console.log(this.Unredeemed)

});
      },
      updateFB(){
        var data = {    
        Unredeemed: (this.Unredeemed - 1),
        A : this.a,
        W : this.w,
        S: this.s,
        T: this.t,
        E: this.e}
        
        const docRef = doc(db, "users", String(this.user));
        updateDoc(docRef, data).then(() => {
    console.log("Value of an Existing Document Field has been updated");
})
.catch(error => {
    console.log(error);
})
alert("Please refresh the page to see the updates")
    //  this.$router.go() 
    },
      updateInternal(i){
        if(i == 1){
            this.w += 1
        }
        else if (i ==2){
            this.a += 1
        }
                else if (i ==3){
            this.s += 1
        }
                else if (i ==4){
            this.t += 1
        }
                else if (i ==5){
            this.e += 1
        }
        

      }
    },
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

}
</script>

<style>
#redeemBtn {
  background-color: #5aa05d;
  border: 2px solid rgb(73, 121, 68);;
  color: white;
  padding: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 90px;
  box-shadow: 5px 5px 5px #888888;
}
</style>