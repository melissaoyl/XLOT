<template>
  <div id="main">
<h1 id="title"> Upload History</h1>
  <table id = "table">
      <tr>
          <th> Date</th>
          <th> Before </th>
          <th>After</th>
        </tr>
  </table> <br><br>
</div>
</template>

<script>
import firebaseApp from '../firebase.js'
import {getFirestore, getDocs, collection} from "firebase/firestore";

const db = getFirestore(firebaseApp)



export default {
    mounted() {
                async function getScores(){
          
            let x = await getDocs(collection(db,"users","thomthom","pics"))
            let ind = 1;
            const map =[]
            x.forEach((docs) =>{
                let s = docs.data()
                let before = s.before
                let after = s.after 
                let date = s.date

                map.push([date,before,after])
            })
            map.sort(function(a,b){

                if (a[0] == b[0]) {
                    return 1
                }
                else if(a[0]<b[0]){
                    return -11
                }
                else{
                    return 1
                }
            })
            for (let i in map){
                if(map[i][0] != null){
                var table = document.getElementById("table")
                var row = table.insertRow(ind)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                cell1.innerHTML = new Date(map[i][0]).toLocaleDateString("en-US", options);
                cell2.innerHTML = "<img style ='width:200px;height:200px' src =" + String(map[i][1]) + ">";
                cell3.innerHTML = "<img style ='width:200px;height:200px'src =" + String(map[i][2]) + ">";
                ind ++
                }
            }
        }
        getScores()


    }

}
</script>

<style>

</style>