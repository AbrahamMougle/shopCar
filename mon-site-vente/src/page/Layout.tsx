import { Outlet } from "react-router-dom";
import Header from "../composant/header";
import Footer from "../composant/footer";
export default function Layout() {
    return <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    
}