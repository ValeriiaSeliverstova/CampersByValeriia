import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const navClasses = ({ isActive }) =>
  `${css.navLink} ${isActive ? css.active : ""}`;

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <h1 className={css.logo}>
        <img
          src="/logo-traveltrucks.svg"
          alt="TravelTrucks logo"
          className={css.logo}
        />
      </h1>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/" className={navClasses}>
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="/catalog" className={navClasses}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
