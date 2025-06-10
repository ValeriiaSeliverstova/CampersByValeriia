import css from "./CamperProfile.module.css";
import { iconMap } from "../../utils/iconMap.js";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import CamperReviews from "../CamperReviews/CamperReviews.jsx";
import Form from "../Form/Form.jsx";

export default function CamperProfile({ camper }) {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className={css.profile}>
      <h2 className={css.name}>{camper.name}</h2>

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
          <Icon icon={iconMap.location} width="18" height="18" />
          <span className={css.location}>{camper.location}</span>
        </div>
      </div>

      <p className={css.price}>€{camper.price.toFixed(2)}</p>

      {camper.gallery && camper.gallery.length > 0 && (
        <div className={css.gallery}>
          {camper.gallery.map((image, index) => (
            <img
              key={index}
              src={image.thumb}
              alt={`${camper.name} view ${index + 1}`}
              className={css.galleryImage}
            />
          ))}
        </div>
      )}

      <p className={css.description}>{camper.description}</p>

      <div className={css.tabButtons}>
        <button
          className={`${css.tabButton} ${
            activeTab === "features" ? css.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${css.tabButton} ${
            activeTab === "reviews" ? css.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={css.tabContent}>
        {activeTab === "features" && <CamperFeatures features={camper} />}
        {activeTab === "reviews" && <CamperReviews reviews={camper.reviews} />}
        <Form />
      </div>
    </div>
  );
}
