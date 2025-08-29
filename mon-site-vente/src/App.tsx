import { BrowserRouter, Routes, Route } from "react-router-dom"
import Accueil from "./page/Acueil"
import About from "./page/About"
import Vans from "./page/van"
import VanDetail from "./page/VanDetail"
import './function/server'
import Layout from "./page/Layout"
import Dashbord from "./page/host/dashboard"
import Income from "./page/host/income"
import LayoutHost from "./composant/layoutHeader"
import Review from "./page/host/review"

function App() {

    return (
        <>
            <BrowserRouter>

                <main className="container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Accueil />} />
                            <Route path="about" element={<About />} />
                            <Route path="vans" element={<Vans />} />
                            <Route path="vans/:id" element={<VanDetail />} />
                            <Route path="host" element={<LayoutHost />}>
                                <Route index element={<Dashbord />} />
                                <Route path="income" element={<Income />} />
                                <Route path="review" element={<Review />} />
                            </Route>
                        </Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    )
}

export default App
