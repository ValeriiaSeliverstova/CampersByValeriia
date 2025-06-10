import css from "./CatalogPage.module.css";
import {
  selectFilteredCampers,
  selectIsLoading,
} from "../../redux/campersSlice";
import { useSelector, useDispatch } from "react-redux";
import CamperCard from "../../components/CamperCard/CamperCard";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import SideBarFilters from "../../components/SideBarFilters/SideBarFilters";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";

export default function CatalogPage() {
  const campers = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.catalogPage}>
      <SideBarFilters />
      {isLoading && <Loader />}
      {campers.length > 0 && (
        <>
          <ul className={css.catalogList}>
            {campers.map((camper) => (
              <CamperCard camper={camper} key={camper.id} />
            ))}
          </ul>
        </>
      )}
      {!isLoading && campers.length === 0 && (
        <p className={css.notFound}>No campers found based on chosen filters</p>
      )}
    </div>
  );
}
