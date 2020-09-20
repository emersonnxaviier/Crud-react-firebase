
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';


// configuração de quando é criado o banco.
const firebaseConfig = {
    // configuração do firebase aqui.
};

// processo de conexão do firebase com a aplicação.
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore(); // sempre que for usar  manipulação no banco vai ser utilizado o db.
