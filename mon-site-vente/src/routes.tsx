import Accueil from "./page/Acueil"
import About from "./page/About"
import Vans, { datafetch } from "./page/van"
import './function/server'
import Layout from "./page/Layout"
import Income from "./page/host/income"
import LayoutHost from "./composant/layoutHeader"
import Review from "./page/host/review"
import HostDetailInfo from "./page/hostVandetailInfo"
import HostDetailPhoto from "./page/host/hostDetailPhoto"
import HostVanDetail from "./page/host/hostVanDetail"
import HostVans ,{loaderHost}  from "./page/host/hostVan"
import VanDetail, { loaderData } from "./page/VanDetail"
import NotFound from "./page/notFound"
import HandleErrorRouterVan from "./page/host/handleErrorRoute"
import Contact, { action } from "./page/contact"
import Resgister from "./page/Register"
import requireAuth from "./function/requireAuth"



 export const routesApp = [
  {    path: "/",
    element: <Layout />,
    errorElement: <HandleErrorRouterVan />,
    children: [
      { index: true, element: <Accueil />, loader: async ({ request }: { request: Request }) => { requireAuth(request) } },
      { path: "about", element: <About />, loader: async ({ request }: { request: Request }) => { requireAuth(request) } },
      { path: "connecte", element: <Contact />, action: action, },
      { path: "register", element: <Resgister />},
      { path: 'rente', element: <Vans />, loader: datafetch },
      { path: "rente/:id", element: <VanDetail />, loader: loaderData },

      {
        path: "myvan",
        element: <LayoutHost />,
        children: [ 
          { index:true ,path: "income", element: <Income /> },
          { path: "review", element: <Review /> },
          { path: "vans", element: <HostVans />,loader:loaderHost },
          {
            path: "vans/:id",
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