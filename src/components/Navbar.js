import {
  Link
} from "react-router-dom";

const Navbar = () => {
  return <nav>
    <ul style={{display: 'flex', listStyle: 'none'}}>
      <li>
        <Link to="/hot">Hot</Link>
      </li>
      <li>
        <Link to="/regular">Regular</Link>
      </li>
    </ul>
  </nav>
}

export default Navbar;
