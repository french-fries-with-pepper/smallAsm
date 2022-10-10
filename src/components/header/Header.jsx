import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="pageHeader">
      <div className="pageHeader__wrap">
        <a href="#" className="pageHeader__logoLink">
          <img
            src={logo}
            width="180"
            height=""
            alt="logo"
            className="pageHeade__logo"
          />
        </a>
        <nav className="pageHeader__nav">
          <ul className="pageHeader__list">
            <li className="pageHeader__item">
              <a href="#" className="pageHeader__link">
                interpreter
              </a>
            </li>
            <li className="pageHeader__item">
              <a href="#" className="pageHeader__link">
                about
              </a>
            </li>
            <li className="pageHeader__item pageHeader__item--bottom">
              <a href="#" className="pageHeader__link ">
                contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
