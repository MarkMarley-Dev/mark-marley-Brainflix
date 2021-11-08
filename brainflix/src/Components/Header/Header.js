// ! .. Import .. ! //

import "../Header/header.scss";
import "../Variables/Variables.scss";
import headerLogo from "../../Assets/Icons/upload.svg";
import headerSearchimg from "../../Assets/Icons/search.svg";

export default function Header() {
  /* props;  add props in later*/

  return (
    <header className="header">
      <div className="header__logo-container">
        <div className="header__logo"></div>
      </div>
      <div className="header__items">
        <div className="header__search-box">
          <img
            className="header__search-img"
            alt="Search Image"
            src={headerSearchimg}
          />
          <p className="header__search-txt"> Search </p>
        </div>
        <div className="header__img"></div>

        <div>
          <div className="header__upload-btn">
            <img
              className="header__upload-img"
              alt="Upload Image"
              src={headerLogo}
            />
            <div className="header__upload-txt-container">
              <p className="header__upload-txt"> Upload</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
