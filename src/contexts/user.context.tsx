import { User } from 'firebase/auth';
import React, { createContext, useState } from 'react';

type TContextProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  currentUser: User | null;
};

export const UserContext = createContext<TContextProps>({
  setCurrentUser: () => null,
  currentUser: null,
});

type Props = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUserDataContext() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('User Context should be not null');
  }
  return context;
}
