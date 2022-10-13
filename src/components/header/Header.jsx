import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  const currentPath = useLocation().pathname;
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
              <Link className={currentPath === "/" ? "active" : ""} to="/">
                Interpreter
              </Link>
            </li>
            <li className="pageHeader__item">
              <Link
                className={currentPath === "/Examples" ? "active" : ""}
                to="/Examples"
              >
                Examples
              </Link>
            </li>
            <li className="pageHeader__item">
              <Link
                className={currentPath === "/Docs" ? "active" : ""}
                to="/Docs"
              >
                Docs
              </Link>
            </li>
            <li className="pageHeader__item pageHeader__item--bottom">
              <Link
                className={currentPath === "/Contacts" ? "active" : ""}
                to="/Contacts"
              >
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
