import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routesApp } from "./routes";

const router = createBrowserRouter(routesApp);

function AppRouter() {
  return <RouterProvider router={router} />;
}
export default function App() {
  return <AppRouter />;  // ✅ On appelle juste le router
}