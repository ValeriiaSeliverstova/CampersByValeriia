import { Icon } from "@iconify/react";
import css from "./Tags.module.css";
import { iconMap } from "../../utils/iconMap.js";

export default function Tags({ tags }) {
  if (!tags || typeof tags !== "object") return null;
  const labelMap = {
    AC: "AC",
    bathroom: "Bathroom",
    kitchen: "Kitchen",
    TV: "TV",
    radio: "Radio",
    refrigerator: "Refrigerator",
    microwave: "Microwave",
    water: "Water",
    gas: "Gas",
    engine: "",
    transmission: "",
  };

  const tagKeys = [
    "engine",
    "transmission",
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "water",
    "gas",
  ];

  return (
    <ul className={css.tags}>
      {tagKeys.map((key) => {
        const value = tags[key];

        if (!value) return null;

        const isBoolean = typeof value === "boolean";
        const label = isBoolean
          ? labelMap[key] || key
          : value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <li key={key} className={css.tag}>
            <Icon icon={iconMap[key]} width="20" height="20" />
            <span className={css.label}>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
