import { TCategoryMap, TCollection, TUserDocArgs } from '@/types';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
import { object } from 'zod';

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
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: TCollection[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj: TCollection) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async (category:string) => {
  const collectionRef = collection(db, category);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const result = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  return result;
};

export const createUserDocFromAuth = async (
  userAuth: User,
  args?: TUserDocArgs
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

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error: any) {
    switch (error.code) {
      case 'auth/wrong-password':
        alert('incorrect password for email');
        break;
      default:
        console.log(error);
    }
    return undefined;
  }
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error: any) {
    switch (error.code) {
      case 'auth/wrong-password':
        alert('incorrect password for email');
        break;
      case 'auth/user-not-found':
        alert('no user associated with this email');
        break;
      default:
        console.log(error);
    }
    return undefined;
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: (user: any) => any) =>
  onAuthStateChanged(auth, callback);
