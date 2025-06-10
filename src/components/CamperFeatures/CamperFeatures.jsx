import css from "./CamperFeatures.module.css";
import Tags from "../Tags/Tags";

export default function CamperFeatures({ features }) {
  return (
    <div>
      <div className={css.featuresSection}>
        <Tags tags={features} />
        <div className={css.characteristics}>
          <div className={css.vehicleTitle}>Vehicle details</div>
          <div className={css.vehicleDetails}>
            <table border="1">
              <tbody>
                <tr>
                  <td className={css.tableKey}>Form</td>
                  <td className={css.tableValue}>{features.form}</td>
                </tr>
                <tr>
                  <td className={css.tableKey}>Length</td>
                  <td className={css.tableValue}>{features.length}</td>
                </tr>
                <tr>
                  <td className={css.tableKey}>Width</td>
                  <td className={css.tableValue}>{features.width}</td>
                </tr>
                <tr>
                  <td className={css.tableKey}>Height</td>
                  <td className={css.tableValue}>{features.height}</td>
                </tr>
                <tr>
                  <td className={css.tableKey}>Tank</td>
                  <td className={css.tableValue}>{features.tank}</td>
                </tr>
                <tr>
                  <td className={css.tableKey}>Consumption</td>
                  <td className={css.tableValue}>{features.consumption}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
