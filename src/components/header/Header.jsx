import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="pageHeader">
      <div className="pageHeader__wrap">
        <Link to="/" className="pageHeader__logoLink">
          <img
            src={logo}
            width="180"
            height=""
            alt="logo"
            className="pageHeade__logo"
          />
        </Link>
        <nav className="pageHeader__nav">
          <ul className="pageHeader__list">
            <li className="pageHeader__item">
              <Link to="/">Interpreter</Link>
            </li>
            <li className="pageHeader__item">
              <Link to="/Examples">Examples</Link>
            </li>
            <li className="pageHeader__item">
              <Link to="/Docs">Docs</Link>
            </li>
            <li className="pageHeader__item pageHeader__item--bottom">
              <Link to="/Contacts" className="pageHeader__link ">
                contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
