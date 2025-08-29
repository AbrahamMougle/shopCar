import { Outlet } from "react-router-dom"
import CustomNavLink from "./customnavLink"
export default function LayoutHost() {
    return <div>
        <nav>
            
              <CustomNavLink to="." end>Dashboard</CustomNavLink>
              <CustomNavLink to="review">Review</CustomNavLink>
              <CustomNavLink to="income">Income</CustomNavLink>
              <CustomNavLink to="hostvan">Vans</CustomNavLink>
            </nav>
            <Outlet />
    </div>
    
}