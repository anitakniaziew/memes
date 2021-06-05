import {
  Link,
  useRouteMatch
} from "react-router-dom";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import classnames from 'classnames';
import styles from './navbar.module.scss';

const Navbar = () => {
  const hot = useRouteMatch("/hot");
  const regular = useRouteMatch('/regular');

  return (<nav className={styles.header}>
    <Tabs style={{display: 'flex', listStyle: 'none'}}
    orientation="vertical">
      <Tab icon={<WhatshotIcon />} label="hot" component={Link} to="/hot" className={classnames([styles.navLink, {[styles.active]: hot}])} 
      />
      <Tab icon={<AcUnitOutlinedIcon />} label="regular" component={Link} to="/regular" className={classnames([styles.navLink, {[styles.active]: regular}])} />
    </Tabs>
  </nav>)
}

export default Navbar;
