import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAufcVPO5Da84Ml6UT-38P0UAaSxdbQ5u8",
  authDomain: "itransition-task4-8e65f.firebaseapp.com",
  projectId: "itransition-task4-8e65f",
  storageBucket: "itransition-task4-8e65f.appspot.com",
  messagingSenderId: "933833105163",
  appId: "1:933833105163:web:608a24e1b816d6796f8c0e",
  databaseURL: "https://itransition-task4-8e65f-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function writeChanges(name, data) {
  const spaceRef = ref(database, name);
  set(spaceRef, data)
    .then(() => console.log('state writen'))
    .catch((error) => console.log(error));
}

function setListner(name, updateData) {
  const itemRef = ref(database, name);
  onValue(itemRef, (snapshot) => {
    const data = snapshot.val();
    updateData(data);
  });
}

export {
  writeChanges,
  setListner
}
