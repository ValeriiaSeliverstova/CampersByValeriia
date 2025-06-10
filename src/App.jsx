import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

// import layouts
const CamperDetailsLayout = lazy(() =>
  import("./layouts/CamperDetailsLayout/CamperDetailsLayout")
);
const CatalogLayout = lazy(() =>
  import("./layouts/CatalogLayout/CatalogLayout")
);
const HomeLayout = lazy(() => import("./layouts/HomeLayout/HomeLayout"));
const NotFoundLayout = lazy(() =>
  import("./layouts/NotFoundLayout/NotFoundLayout")
);

// import pages
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage")
);
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/catalog" element={<CatalogLayout />}>
            <Route index element={<CatalogPage />} />
            <Route path="/catalog/:catalogId" element={<CamperDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFoundLayout />} />
        </Routes>
      </Suspense>
    </div>
  );
}
