import { Link, Outlet } from 'react-router-dom';
// import CrwnLogol from '../../assets/crown.svg';
import './navigation.styles.scss';
import { useUserDataContext } from '@/contexts/user.context';
import { Button } from '@/components/ui/button';
import { signOutUser } from '@/utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useUserDataContext();

  const signOutHandler = async () => {
    try {
      await signOutUser();
      setCurrentUser(null);
    } catch (error) {
      console.log('Error accured while signing out', error)
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
            <Button variant="ghost" onClick={}>
              Sign Out
            </Button>
          ) : (
            <Button variant="link" asChild>
              <Link className="nav-link" to="/auth">
                Sign in
              </Link>
            </Button>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
