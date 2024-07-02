import Navigation from '@/components/navigation/navigation.component';
import { setCurrentUser } from '@/store/user/user.action';
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from '@/utils/firebase/firebase.utils';
import { User } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Root = () => {
  console.log('Root component rendered')

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
