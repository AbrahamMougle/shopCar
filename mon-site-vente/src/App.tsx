import { Routes, Route,BrowserRouter} from "react-router-dom"
import Accueil from "./page/Acueil"
import About from "./page/About"
import Vans from "./page/van"
import './function/server'
import Layout from "./page/Layout"
import Dashbord from "./page/host/dashboard"
import Income from "./page/host/income"
import LayoutHost from "./composant/layoutHeader"
import Review from "./page/host/review"
import HostDetailInfo from "./page/hostVandetailInfo"
import HostDetailPrice from "./page/host/hostDetailPrice"
import HostDetailPhoto from "./page/host/hostDetailPhoto"
import HostVanDetail from "./page/host/hostVanDetail"
import HostVans from "./page/host/hostVan"
import VanDetail from "./page/VanDetail"
import NotFound from "./page/notFound"

function renderRoutes(routes: any[]) {
  return routes.map((route, i) => (
    <Route
      key={i}
      path={route.path}
      element={route.element}
      index={route.index}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
}

export  function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Accueil /> },
        { path: "about", element: <About /> },
        { path: "van", element: <Vans /> },
        { path: "van/:id", element: <VanDetail /> },
        {
          path: "host",
          element: <LayoutHost />,
          children: [
            { index: true, element: <Dashbord /> },
            { path: "income", element: <Income /> },
            { path: "review", element: <Review /> },
            { path: "hostvan", element: <HostVans /> },
            {
              path: "hostvan/:id",
              element: <HostVanDetail />,
              children: [
                { index: true, element: <HostDetailInfo /> },
                { path: "price", element: <HostDetailPrice /> },
                { path: "photo", element: <HostDetailPhoto /> },
              ],
            },
          ],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];

  return <Routes>{renderRoutes(routes)}</Routes>;
}
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

