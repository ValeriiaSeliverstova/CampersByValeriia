import { useState } from "react";
import { Icon } from "@iconify/react";
import { iconMap } from "../../utils/iconMap";
import css from "./SideBarFilters.module.css";
import {
  setLocationFilter,
  setTagsFilter,
  setVehicleTypeFilter,
} from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";

export default function SideBarFilters() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [tags, setTags] = useState([]);
  const [vehicleType, setVehicleType] = useState("");

  const availableTags = [
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

  const existingVehicleTypes = ["panelTruck", "fullyIntegrated", "alcove"];

  const labelMap = {
    panelTruck: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
  };

  const handleTagToggle = (tag) => {
    setTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((filteredTag) => filteredTag !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  const handleSearch = () => {
    dispatch(setLocationFilter(location));
    dispatch(setTagsFilter(tags));
    dispatch(setVehicleTypeFilter(vehicleType));
  };

  return (
    <div className={css.searchBar}>
      <div className={css.group}>
        <label htmlFor="location" className={css.locationLabel}>
          Location
        </label>
        <div className={css.inputWrapper}>
          <Icon
            icon={iconMap.location}
            className={css.icon}
            width="24"
            height="24"
          />
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={css.input}
            placeholder="Enter location"
          />
        </div>
      </div>

      <p className={css.filterTitle}>Filters</p>

      <div className={css.group}>
        <p className={css.groupTitle}>Vehicle equipment</p>
        <div className={css.tagsGrid}>
          {availableTags.map((tag) => (
            <label
              key={tag}
              className={`${css.tagButton} ${
                tags.includes(tag) ? css.active : ""
              }`}
            >
              <input
                type="checkbox"
                value={tag}
                checked={tags.includes(tag)}
                onChange={() => handleTagToggle(tag)}
                className={css.hiddenCheckbox}
              />
              <Icon icon={iconMap[tag]} width="24" height="24" />
              <span>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={css.group}>
        <p className={css.groupTitle}>Vehicle Type</p>
        <div className={css.tagsGrid}>
          {existingVehicleTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={`${css.tagButton} ${
                vehicleType === type ? css.active : ""
              }`}
              onClick={() => setVehicleType(type)}
            >
              <Icon icon={iconMap[type]} width="24" height="24" />
              <span>{labelMap[type]}</span>
            </button>
          ))}
        </div>
      </div>

      <Button onClick={handleSearch}>
        <span className={css.buttonText}>Search</span>
      </Button>
    </div>
  );
}
