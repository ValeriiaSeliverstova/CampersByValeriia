import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <ClipLoader color="#D84343" size={150} />
    </div>
  );
}
