import BtnTheme from "../btnTheme/BtnTheme";
import Logo from "../logo/Logo";
import s from "./Header.module.scss";

function Header() {
  return (
    <div className={s.header}>
      <Logo />
      <BtnTheme />
    </div>
  );
}
export default Header;
