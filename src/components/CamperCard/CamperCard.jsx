import css from "./CamperCard.module.css";
import { NavLink } from "react-router-dom";
import { iconMap } from "../../utils/iconMap.js";
import { Icon } from "@iconify/react";
import Tags from "../Tags/Tags.jsx";
import Button from "../Button/Button.jsx";
import { selectFavorites, setFavorite } from "../../redux/favoritesSlice.js";
import { useSelector, useDispatch } from "react-redux";

export default function CamperCard({ camper }) {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.some((item) => item.id === camper.id);

  const handleFavorite = () => {
    dispatch(setFavorite(camper));
  };

  return (
    <li className={css.card}>
      {camper.gallery && camper.gallery.length > 0 && (
        <img
          src={camper.gallery[0]?.thumb}
          alt={camper.name}
          className={css.image}
        />
      )}

      <div className={css.content}>
        <div className={css.header}>
          <h3 className={css.name}>{camper.name}</h3>
          <p className={css.price}>€{camper.price.toFixed(2)}</p>
          <button
            onClick={handleFavorite}
            className={css.favoriteBtn}
            aria-label="Add to favorites"
          >
            <Icon
              icon={isFavorite ? iconMap.heartFilled : iconMap.heart}
              width="26"
              height="24"
              className={`${css.heartIcon} ${
                isFavorite ? css.heartFilled : ""
              }`}
            />
          </button>
        </div>

        <div className={css.meta}>
          <Icon
            icon={iconMap.rate}
            width="16"
            height="16"
            style={{ color: "var(--color-yellow)" }}
          />
          <span className={css.rating}>
            {camper.rating} ({camper.reviews.length} Reviews)
          </span>
          <div className={css.locationWrapper}>
            <Icon icon={iconMap.location} width="20" height="20" />
            <span className={css.location}>{camper.location}</span>
          </div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <Tags tags={camper} />
        <NavLink to={`/catalog/${camper.id}`} className={css.link}>
          <Button>
            <span className={css.buttonText}>Show More</span>
          </Button>
        </NavLink>
      </div>
    </li>
  );
}
