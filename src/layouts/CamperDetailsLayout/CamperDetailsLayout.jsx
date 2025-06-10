import Navigation from "../../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

const CamperDetailsLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default CamperDetailsLayout;
