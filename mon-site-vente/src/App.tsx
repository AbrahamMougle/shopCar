import { BrowserRouter, Routes, Link, Route } from "react-router-dom"
import Accueil from "./page/Acueil"
import About from "./page/About"
import Vans from "./page/van"
import VanDetail from "./page/VanDetail"
import './function/server'

function App() {

  return (
    <>
      <BrowserRouter>
        <header className="bg-gradient-to-r from-orange-400 to-orange-600 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              to='/'
              className="text-3xl font-bold text-white hover:text-orange-100 transition-colors"
            >
              🚐 #VanLife
            </Link>

            <nav className="flex gap-4">
              <Link
                to='/vans'
                className="px-4 py-2 text-white font-medium rounded-lg hover:bg-orange-500 transition-colors"
              >
                Vans
              </Link>
              <Link
                to='/about'
                className="px-4 py-2 text-white font-medium rounded-lg hover:bg-orange-500 transition-colors"
              >
                À propos
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
