<template>
  <div id="main" v-if="user">
    <TopBanner />
    <br /><br />
    <h1 id="title">Redeemable Amount</h1>
    <h3>${{ this.redeemableAmount }}</h3>
    <h1 id="title">Sticker Collection</h1>
    <table id="counter_table" width="100%">
      <tr>
        <th><b>W</b>illy</th>
        <th>Abi</th>
        <th>Sally</th>
        <th>Tye</th>
        <th>Erra</th>
        <th>Unredeemed Stickers</th>
      </tr>
      <tr>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/willy.png" />
        </td>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/abi.png" />
        </td>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/sally.png" />
        </td>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/tye.png" />
        </td>
        <td>
          <img style="width: 200px; height: 200px" src="@/assets/erra.png" />
        </td>

        <td>
          <RandomNumber />
        </td>
      </tr>
      <button
        id="redeemBtn"
        v-if="
          this.a > 0 &&
          this.w > 0 &&
          this.t > 0 &&
          this.e > 0 &&
          this.s > 0 &&
          this.state == 0
        "
        @click="redeem"
      >
        Redeem Cash Lucky Draw!
      </button>
      <button id="redeemBtn" v-if="this.state == 1" @click="refresh">
        Refresh Page
      </button>
    </table>
    <br /><br />
  </div>
  <div v-else>
    <Login route="" />
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../views/LoginPage.vue";
import TopBanner from "./TopBanner.vue";
import RandomNumber from "./RandomNumber.vue";

const db = getFirestore(firebaseApp);

export default {
  components: {
    Login,
    TopBanner,
    RandomNumber,
  },
  data() {
    return {
      user: false,
      w: 0,
      a: 0,
      s: 0,
      t: 0,
      e: 0,
      Unredeemed: 0,
      redeemableAmount: 0,
      state: 0,
    };
  },

  methods: {
    async getCounterValues() {
      const querySnapshot = await getDocs(collection(db, "users"));

      let ind = 1;
      const map = [];
      querySnapshot.forEach((docs) => {
        if (docs.data().emailAddress == this.user) {
          console.log(docs.id, " => ", docs.data());
          let counterdata = docs.data();
          let w = counterdata.W;
          console.log("W :" + w);
          let a = counterdata.A;
          console.log("A :" + a);
          let s = counterdata.S;
          console.log("S :" + s);
          let t = counterdata.T;
          console.log("T :" + t);
          let e = counterdata.E;
          console.log("E :" + e);
          let u = counterdata.Unredeemed;
          map.push([w, a, s, t, e, u]);
          this.a = a;
          this.w = w;
          this.t = t;
          this.e = e;
          this.s = s;
          this.Unredeemed = u;
        }
      });

      var table = document.getElementById("counter_table");
      var row = table.insertRow(ind);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);

      cell1.innerHTML = "<h1> " + String(map[0][0]) + "</h1>";

      cell2.innerHTML = "<h1> " + String(map[0][1]) + "</h1>";

      cell3.innerHTML = "<h1> " + String(map[0][2]) + "</h1>";

      cell4.innerHTML = "<h1> " + String(map[0][3]) + "</h1>";

      cell5.innerHTML = "<h1> " + String(map[0][4]) + "</h1>";

      cell6.innerHTML = "<h1> " + String(map[0][5]) + "</h1>";

      ind++;
    },
    redeem() {
      var data = {
        Unredeemed: this.Unredeemed,
        A: this.a - 1,
        W: this.w - 1,
        S: this.s - 1,
        T: this.t - 1,
        E: this.e - 1,
      };

      const docRef = doc(db, "users", String(this.user));
      updateDoc(docRef, data)
        .then(() => {
          console.log("Value of an Existing Document Field has been updated");
        })
        .catch((error) => {
          console.log(error);
        });

      alert("Please Refresh Page");
      this.state = 1;
      //  this.$router.go()

      var amount_won = Math.floor(Math.random() * 100 + 1);
      var redeemData = {
        RedeemableAmount: this.redeemableAmount + amount_won,
      };
      updateDoc(docRef, redeemData)
        .then(() => {
          console.log("Value of an Existing Document Field has been updated");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getRedeemableAmount() {
      const querySnapshot = await getDocs(collection(db, "users"));

      querySnapshot.forEach((docs) => {
        if (docs.data().emailAddress == this.user) {
          console.log(docs.id, " => ", docs.data());
          let data = docs.data();
          this.redeemableAmount = data.RedeemableAmount;
        }
      });
    },
    refresh() {
      this.$router.go();
    },
  },
  beforeMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("this is true");
        this.user = auth.currentUser.email;
        console.log(this.user);
        this.getCounterValues();
        this.getRedeemableAmount();
      } else {
        this.user = false;
      }
    });
  },

  goToRedeem() {
    this.$router.push("/profiledisplay");
  },
};
</script>

<style>
#redeemBtn {
  background-color: #5aa05d;
  border: 2px solid rgb(73, 121, 68);
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

#title {
  font-size: 40px;
  font-weight: 600;
  text-decoration: underline;
}

#unredeemed,
#stickers {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: #5aa05d;
}
</style>
