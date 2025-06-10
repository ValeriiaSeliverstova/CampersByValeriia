import css from "./CamperReviews.module.css";
import { iconMap } from "../../utils/iconMap";
import { Icon } from "@iconify/react";

export default function ReviewsSection({ reviews }) {
  return (
    <div className={css.reviewsSection}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewItem}>
          <p className={css.name}>{review.reviewer_name}</p>
          <div className={css.ratingSection}>
            <Icon
              icon={iconMap.rate}
              width="16"
              height="16"
              style={{ color: "var(--color-yellow)" }}
            />
            <span className={css.rating}>{review.reviewer_rating}</span>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
