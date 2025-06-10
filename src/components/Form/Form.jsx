import css from "./Form.module.css";
import Button from "../Button/Button";
import { useRef, useState } from "react";
import DayPicker from "../DayPicker/DayPicker";

export default function Form() {
  const formRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    setSuccessMessage("Booking is successfully requested. Thank you!");
    form.reset();
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formDescription}>
        Stay connected! We are always ready to help.
      </p>

      {successMessage && (
        <div className={css.formSuccess}>{successMessage}</div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className={css.form}>
        <div className={css.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={css.formInput}
            placeholder="Name *"
          />
        </div>

        <div className={css.formGroup}>
          <input
            type="text"
            id="email"
            name="email"
            required
            className={css.formInput}
            placeholder="Email *"
          />
        </div>

        <div className={css.formGroup}>
          <DayPicker />
        </div>

        <div className={css.formGroup}>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            className={css.formTextarea}
            placeholder="Comment"
          />
        </div>

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
