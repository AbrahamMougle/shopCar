import { BrowserRouter, Routes, Route } from "react-router-dom"
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

export default function App() {

    return (
        <>
            <BrowserRouter>

                <main className="container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Accueil />} />
                            <Route path="about" element={<About />} />
                            <Route path="van" element={<Vans />} />
                            <Route path="host" element={<LayoutHost />}>
                                <Route index element={<Dashbord />} />
                                <Route path="income" element={<Income />} />
                                <Route path="review" element={<Review />} />
                                <Route path="hostvan" element={<HostVans />} />
                                <Route path="hostvan/:id" element={<HostVanDetail />} >
                                    <Route index element={<HostDetailInfo/>} />
                                    <Route path="price" element={<HostDetailPrice />} />
                                    <Route path="photo" element={<HostDetailPhoto />} />
                                </Route>
                            </Route>
                        </Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    )
}



