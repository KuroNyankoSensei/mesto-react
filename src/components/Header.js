import logo from "../images/logo/header.svg";

function Header() {
  return (
    <header className="header">
      <img className="header_logo" src={logo} alt="Логотип" />
    </header>
  );
}
export default Header;
