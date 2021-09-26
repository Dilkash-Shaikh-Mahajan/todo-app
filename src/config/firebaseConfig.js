import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAwpqfBIu5IPSrycpzITBm_S9k85AXnk5A',
	authDomain: 'todoapp-5993d.firebaseapp.com',
	databaseURL: 'https://todoapp-5993d.firebaseio.com',
	projectId: 'todoapp-5993d',
	storageBucket: 'todoapp-5993d.appspot.com',
	messagingSenderId: '332875802346',
	appId: '1:332875802346:web:36680b1f5e98a3499a9993',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
