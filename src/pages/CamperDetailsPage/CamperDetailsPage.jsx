import css from "./CamperDetailsPage.module.css";
import CamperProfile from "../../components/CamperProfile/CamperProfile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperDetails } from "../../redux/campersOps";
import { useEffect } from "react";
import { selectCamperDetails, selectIsLoading } from "../../redux/campersSlice";
import Loader from "../../components/Loader/Loader";

export default function CamperDetailsPage() {
  const { catalogId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCamperDetails(catalogId));
  }, [catalogId, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (!camper) {
    return <p className={css.notFound}>Camper not found...</p>;
  }

  return (
    <div className={css.camperDetailsPage}>
      <CamperProfile camper={camper} key={camper.id} />
    </div>
  );
}

// MOCK data test
// export default function CamperDetailsPage() {
//   return (
//     <div className={css.camperDetailsPage}>
//       <CamperProfile camper={mock} key={mock.id} />
//     </div>
//   );
// }
