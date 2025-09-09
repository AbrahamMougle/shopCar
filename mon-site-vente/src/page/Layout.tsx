import { Outlet } from "react-router-dom";
import Header from "../composant/header";
import Footer from "../composant/footer";
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Décale tout le contenu sous le header fixe */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
