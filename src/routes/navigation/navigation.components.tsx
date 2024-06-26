import { Link, Outlet } from 'react-router-dom';
// import CrwnLogol from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <CrwnLogol /> */}
          <div className='mylogo'>
            Logo
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
