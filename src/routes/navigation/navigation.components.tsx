import { Link, Outlet } from 'react-router-dom';
// import CrwnLogol from '../../assets/crown.svg';
import './navigation.styles.scss';
import { useUserDataContext } from '@/contexts/user.context';
import { Button } from '@/components/ui/button';
import { signOutUser } from '@/utils/firebase/firebase.utils';
import CartIcon from '@/components/cart-icon/cart-icon.component';

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
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <CrwnLogol /> */}
          <div className="mylogo">Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
