import { userDocArgs } from '@/types';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  type User,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDe5c0h3UkOe5BxX0SqIWWyNC4T7f7OGTg',
  authDomain: 'crown-clothing-db-7e5bd.firebaseapp.com',
  projectId: 'crown-clothing-db-7e5bd',
  storageBucket: 'crown-clothing-db-7e5bd.appspot.com',
  messagingSenderId: '675597159214',
  appId: '1:675597159214:web:9a61cac8f98cf33d2308bf',
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = async () =>
  await signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth: User,
  args?: userDocArgs
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...args,
      });
    } catch (error) {
      console.log('Can not create user', (error as Error).message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};
