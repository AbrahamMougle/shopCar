import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Accueil from "./page/Acueil"
import About from "./page/About"
import Vans, { datafetch } from "./page/van"
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
import VanDetail, { loaderData } from "./page/VanDetail"
import NotFound from "./page/notFound"
import HandleErrorRouterVan from "./page/host/handleErrorRoute"
import Contact, { action } from "./page/contact"


function requireAuth(resquest:Request) {
  const isAuth=localStorage.getItem("isAuth")
   console.log(resquest);
   const pathname = new URL(resquest.url).pathname
  if (!isAuth) {
    const response = redirect(`/connecte?message=veuillez connecter.&redirectTo=${pathname}`)
    response.body=true
    throw response
  }
  return null
  
}
const routesApp = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <HandleErrorRouterVan />,
    children: [
      { index: true, element: <Accueil />, loader: ({ request }: { request: Request }) => { requireAuth(request) } },
      { path: "about", element: <About />, loader:({ request }: { request: Request }) => { requireAuth(request) } },
      { path: "connecte", element: <Contact />, action: action, },
      { path: 'van', element: <Vans />, loader: datafetch },
      { path: "van/:id", element: <VanDetail />, loader: loaderData },

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

const router = createBrowserRouter(routesApp);

function AppRouter() {
  return <RouterProvider router={router} />;
}
export default function App() {
  return <AppRouter />;  // ✅ On appelle juste le router
}