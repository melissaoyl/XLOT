<template>
  <div id="main" v-if="user">
    <TopBanner />
    <br /><br />
    <h1 id="title">Unredeemed Counter</h1>
    <table id="unredeemed_table" width="100%">
      <tr>
        <th>Unredeemed</th>
      </tr>
    </table>
    <br /><br />
    <h1 id="title">Sticker Counter</h1>
    <table id="counter_table" width="100%">
      <tr>
        <th>W</th>
        <th>A</th>
        <th>S</th>
        <th>T</th>
        <th>E</th>
      </tr>
    </table>
    <br /><br />
  </div>
  <div v-else>
    <Login route="" />
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../views/LoginPage.vue";
import TopBanner from "./TopBanner.vue";

const db = getFirestore(firebaseApp);

export default {
  components: {
    Login,
    TopBanner,
  },
  data() {
    return {
      user: false,
      w: 0,
      a: 0,
      s: 0,
      t: 0,
      e: 0,
      unredeemed: 0,
    };
  },

  methods: {
    async getCounterValues() {
      let x = await getDocs(collection(db, "users"));

      x.forEach((docs) => {
        console.log(docs);
      });
      //   let ind = 1;
      //   const map = [];
      //   x.forEach((docs) => {
      //     let counterdata = docs.data();
      //     let w = counterdata.W;
      //     let a = counterdata.A;
      //     let s = counterdata.S;
      //     let t = counterdata.T;
      //     let e = counterdata.E;

      //     map.push([w, a, s, t, e]);
      //   });

      //   for (let i in map) {
      //     if (map[i][0] != null) {
      //       var table = document.getElementById("counter_table");
      //       var row = table.insertRow(ind);
      //       row.insertCell(0);
      //       row.insertCell(1);
      //       row.insertCell(2);
      //       row.insertCell(3);
      //       row.insertCell(4);

      //       ind++;
      //       console.log("getCounter ran : " + ind);
      //     }
      //   }
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
      } else {
        this.user = false;
      }
    });
  },
};
</script>

<style></style>
