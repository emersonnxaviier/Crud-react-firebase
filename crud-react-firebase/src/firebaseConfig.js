
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';


// configuração de quando é criado o banco.
const firebaseConfig = {
    apiKey: "AIzaSyBqvmhwe2kR2NCMKQuesTabpP0LIFgCAZI",
    authDomain: "crudreact-fb547.firebaseapp.com",
    databaseURL: "https://crudreact-fb547.firebaseio.com",
    projectId: "crudreact-fb547",
    storageBucket: "crudreact-fb547.appspot.com",
    messagingSenderId: "1057428385801",
    appId: "1:1057428385801:web:8946ddb148ea744593c8d8"
};

// processo de conexão do firebase com a aplicação.
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore(); // sempre que for usar  manipulação no banco vai ser utilizado o db.
