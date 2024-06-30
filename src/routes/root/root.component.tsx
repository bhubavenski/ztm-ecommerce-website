import Navigation from '@/components/navigation/navigation.component';
import { createUserDocFromAuth, onAuthStateChangedListener } from '@/utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user:any) => {
      if(user) {
        createUserDocFromAuth(user)
      }
      setCurrentUser(user);
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
