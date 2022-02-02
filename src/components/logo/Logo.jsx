import { NavLink } from "react-router-dom";
import s from "./Logo.module.scss";
import logo from "../../assets/images/logo/logo.png";

function Logo() {
  return (
    <div className={s.logo}>
      <NavLink className={s.logoLink} to={"/"}>
        <img className={s.logoImg} src={logo} alt="logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
