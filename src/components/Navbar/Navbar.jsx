import { Link, useRouteMatch } from 'react-router-dom';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import classnames from 'classnames';
import styles from './navbar.module.scss';

const Navbar = () => {
  const hot = useRouteMatch('/hot');
  const regular = useRouteMatch('/regular');

  return (
    <nav className={styles.header}>
      <ul className={styles.navLinks}>
        <Link
          to="/hot"
          className={classnames([styles.navLink, { [styles.active]: hot }])}
        >
          <WhatshotIcon /> Hot
        </Link>
        <Link
          to="/regular"
          className={classnames([styles.navLink, { [styles.active]: regular }])}
        >
          <AcUnitOutlinedIcon /> Regular
        </Link>
      </ul>
      <small>Copywright &copy; A.Kowalska</small>
    </nav>
  );
};

export default Navbar;
