import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDe5c0h3UkOe5BxX0SqIWWyNC4T7f7OGTg',
  authDomain: 'crown-clothing-db-7e5bd.firebaseapp.com',
  projectId: 'crown-clothing-db-7e5bd',
  storageBucket: 'crown-clothing-db-7e5bd.appspot.com',
  messagingSenderId: '675597159214',
  appId: '1:675597159214:web:9a61cac8f98cf33d2308bf',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider) 

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
}