import { Link } from 'react-router-dom';
import { useUserDataContext } from '@/contexts/user.context';
import { Button } from '@/components/ui/button';
import { signOutUser } from '@/utils/firebase/firebase.utils';
import CartIcon from '@/components/cart-icon/cart-icon.component';
import { LogoContainer, NavLinks, NavigationContainer } from './navigation.styles.ts';

const Navigation = () => {
  const { currentUser } = useUserDataContext();

  const signOutHandler = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log('Error signing out', error)
    }
  };

  return (
    <>
      <NavigationContainer>
        <Link className="logo-container" to="/">
          {/* <CrwnLogol /> */}
          <div className="mylogo">Logo</div>
        </Link>
        <NavLinks>
          <LogoContainer to="/shop">
            SHOP
          </LogoContainer>
          {currentUser ? (
            <Button variant="ghost" onClick={signOutHandler}>
              Sign Out
            </Button>
          ) : (
            <Button variant="link" asChild>
              <Link className="nav-link" to="/auth">
                Sign in
              </Link>
            </Button>
          )}
          <CartIcon/>
        </NavLinks>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
