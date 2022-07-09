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
        <th>Willy</th>
        <th>Abi</th>
        <th>Sally</th>
        <th>Tye</th>
        <th>Erra</th>
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

          map.push([w, a, s, t, e]);
        }
      });

      for (let i in map) {
        if (map[i][0] != null) {
          var table = document.getElementById("counter_table");
          var row = table.insertRow(ind);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);

          cell1.innerHTML = "<h1> " + String(map[i][0]) + "</h1>";

          cell2.innerHTML = "<h1> " + String(map[i][1]) + "</h1>";

          cell3.innerHTML = "<h1> " + String(map[i][2]) + "</h1>";

          cell4.innerHTML = "<h1> " + String(map[i][3]) + "</h1>";

          cell5.innerHTML = "<h1> " + String(map[i][4]) + "</h1>";

          ind++;
        }
      }
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
