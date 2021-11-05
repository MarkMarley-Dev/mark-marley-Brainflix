import "../Header/header.scss";
// import variables from "../Variables/Variables.scss";

export default function Header() {
  /* props;  add props in later*/

  return (
    <header className="header">
      <div className="header__Logo"></div>
      <div className="header__middle-mobile">
        <input
          className="header__search-box"
          type="search"
          placeholder="Search"
        />
        <div className="header__img"></div>
      </div>
      <div>
        <button type="submit" class="header__upload-btn">
          Upload
        </button>
      </div>
    </header>
  );
}
