import { Outlet } from "react-router-dom"
import CustomNavLink from "./customnavLink"

export default function LayoutHost() {
    const listNavigation = [ 'Review', 'Income', 'Vans']
    const list = listNavigation.map((value) => {
        if (value === 'Review') {
            return <CustomNavLink to="." inactiveClass="text-primary-500 font-bold text-lg hover:text-primary-700 hover:scale-105 px-2 py-1 transition-all duration-200" activeClass="text-primary-500 font-bold  px-2 py-1 text-lg underline transition-all duration-200" end>{value.toLocaleUpperCase()} </CustomNavLink>
        }
        return <CustomNavLink to={value.toLocaleLowerCase()} inactiveClass="text-primary-500 font-bold text-lg hover:text-primary-700 hover:scale-105 px-2 py-1 transition-all duration-200" activeClass="text-primary-500 font-bold  px-2 py-1 text-lg underline transition-all duration-200"> {value.toLocaleUpperCase()} </CustomNavLink>
    })


    return <div className="p-2">
        <nav> {list}</nav>
        <Outlet />
    </div>

}