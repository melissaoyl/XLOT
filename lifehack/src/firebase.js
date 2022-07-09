// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZfFp_X1S_Pq2ClMw36dHXCC8vuDkyR-M",
    authDomain: "xlot-949d9.firebaseapp.com",
    projectId: "xlot-949d9",
    storageBucket: "xlot-949d9.appspot.com",
    messagingSenderId: "841438609982",
    appId: "1:841438609982:web:2f1a8197fddedaad2ac76f",
    measurementId: "G-PX8H4375P6"
    };

firebase.initializeApp(firebaseConfig);



var db = firebase.firestore();

function setData() {
    db.collection("Users").doc("testdata").set({
        name: "John Doe",
        age: 35,
        email: "hihi"
    })
    .then((doc) => {
        console.log("Document written with ID testdata");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
export default firebaseApp;