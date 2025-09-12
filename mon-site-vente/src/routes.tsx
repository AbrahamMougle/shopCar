import Accueil from "./page/Acueil"
import About from "./page/About"
import Vans, { datafetch } from "./page/van"
import './function/server'
import Layout from "./page/Layout"
import Income from "./page/host/income"
import LayoutHost from "./composant/layoutHeader"
import HostDetailInfo from "./page/hostVandetailInfo"
import HostDetailPhoto from "./page/host/hostDetailPhoto"
import HostVanDetail from "./page/host/hostVanDetail"
import HostVans, { loaderHost } from "./page/host/hostVan"
import VanDetail, { loaderData } from "./page/VanDetail"
import NotFound from "./page/notFound"
import HandleErrorRouterVan from "./page/host/handleErrorRoute"
import Contact, { action } from "./page/contact"
import Resgister from "./page/Register"
import { RequireAuth } from "./composant/requiredAuth"




export const routesApp = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <HandleErrorRouterVan />,
    children: [
      { index: true, element: <RequireAuth><Accueil /></RequireAuth>},
      { path: "about", element:<RequireAuth><About /></RequireAuth>},
      { path: "connecte", element: <Contact />, action: action, },
      { path: "register", element: <Resgister /> },
      { path: 'rente', element: <Vans />, loader: datafetch },
      { path: "rente/:id", element: <VanDetail />, loader: loaderData },

      {
        path: "myvan",
        element: <LayoutHost />,
        children: [
          { path: "income", element: <Income /> },
         
          { index: true, element: <HostVans />, loader: loaderHost },
          {
            path: ":id",
            element: <HostVanDetail />,
            children: [
              { index: true, element: <HostDetailInfo /> },
              { path: "photo", element: <HostDetailPhoto /> },
            ],
          },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];