import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyBrVAk0f54BeeAoHVR6YKEmDQLVUwxeVa4',
	authDomain: 'todo-3fcab.firebaseapp.com',
	databaseURL: 'https://todo-3fcab.firebaseio.com',
	projectId: 'todo-3fcab',
	storageBucket: 'todo-3fcab.appspot.com',
	messagingSenderId: '210377303452',
	appId: '1:210377303452:web:f7ae9e9c24524c47065459',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
