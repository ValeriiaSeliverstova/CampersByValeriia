import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState, useRef } from "react";
import css from "./DayPicker.module.css";

export default function ExampleCalendar() {
  const ref = useRef();
  const [selected, setSelected] = useState(null);
  const [showDayPicker, setShowDayPicker] = useState(false);

  const handleDates = (range) => {
    setSelected(range);
  };

  const formatDateRange = (range) => {
    if (!range?.from) return "";
    const from = range.from.toLocaleDateString("uk-UA");
    const to = range.to?.toLocaleDateString("uk-UA");
    return to ? `${from} — ${to}` : from;
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        ref={ref}
        type="text"
        readOnly
        required
        value={formatDateRange(selected)}
        onClick={() => setShowDayPicker(!showDayPicker)}
        className={css.formInput}
        placeholder="Book your date *"
      />

      {showDayPicker && (
        <div className={css.dayPickerContainer}>
          <DayPicker
            className={css.DayPickerStyle}
            mode="range"
            selected={selected}
            onSelect={handleDates}
            disabled={{ before: new Date() }}
            modifiersClassNames={{
              selected: "my-selected",
              range_start: css["range-start"],
              range_end: css["range-end"],
              range_middle: css["range-middle"],
            }}
          />
        </div>
      )}
    </div>
  );
}
