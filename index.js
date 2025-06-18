// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX7Zhgu2EIqrlQHy6HZeij5EJzmmS3iv8",
  authDomain: "fir-db-511c0.firebaseapp.com",
  projectId: "fir-db-511c0",
  storageBucket: "fir-db-511c0.firebasestorage.app",
  messagingSenderId: "291578602913",
  appId: "1:291578602913:web:27e70b3bb87965faa617e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app,"firebase insial successfully ");

const db = getFirestore(app);
//console.log(db,"firebase db connection successfully ");


//add data 
async function addCollection(name, age, subject) {
  try {
    const docRef = await addDoc(collection(db, "student"), {
      name: name,
      age: age,
      subject: subject
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//get data
async function getAllColection() {
  const querySnapshot = await getDocs(collection(db, "student"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

}

//addCollection("mufa", 25, "homestudy");
getAllColection();
