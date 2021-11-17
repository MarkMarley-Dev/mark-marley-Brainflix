// ! .. Import .. ! //

import "../Header/header.scss";
import "../Variables/Variables.scss";
import headerLogo from "../../Assets/Icons/upload.svg";
import headerSearchimg from "../../Assets/Icons/search.svg";
import { Link } from "react-router-dom";

export default function PageHeader() {
  /* props;  add props in later*/

  return (
    <header className="header">
      <Link to="/" className="header__logo-container">
        <div className="header__logo"></div>
      </Link>
      <div className="header__items">
        <div className="header__search-box">
          <img
            className="header__search-img"
            alt="Search Logo"
            src={headerSearchimg}
          />
          <p className="header__search-txt"> Search </p>
        </div>
        <div className="header__img"></div>
        <Link to="/upload" className="header__upload-btn">
          <img
            className="header__upload-img"
            alt="Upload Logo"
            src={headerLogo}
          />
          <div className="header__upload-txt-container">
            <p className="header__upload-txt"> Upload</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
