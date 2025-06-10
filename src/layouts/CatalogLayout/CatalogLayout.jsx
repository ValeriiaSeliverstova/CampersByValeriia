import Navigation from "../../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

const CatalogLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default CatalogLayout;
