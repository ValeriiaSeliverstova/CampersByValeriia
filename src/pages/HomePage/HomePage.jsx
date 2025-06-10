import css from "./HomePage.module.css";
import heroImage from "../../assets/heroImage.jpg";
import Button from "../../components/Button/Button.jsx";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  return (
    <section className={css.wrapper}>
      <div className={css.hero}>
        <img
          src={heroImage}
          alt="Camper van at sunset by a lake"
          className={css.image}
        />
        <div className={css.overlay}>
          <div className={css.textBlock}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <h2 className={css.subtitle}>
              You can find everything you want in our catalog
            </h2>
          </div>
          <NavLink to="/catalog" className={css.link}>
            <Button>
              <span className={css.buttonText}>View Now</span>
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
