import {NavLink, Outlet } from "react-router-dom"
export default function LayoutHost() {
    return <div>
        <nav>
            <NavLink
                to='/host'
                end
             className={({isActive}:{isActive:boolean})=> isActive ? 'px-4 py-2 text-black font-bold text-2xl rounded-lg hover:bg-orange-500 transition-colors':'px-4 py-2 text-black font-medium rounded-lg hover:bg-orange-500 transition-colors'}
              >
                Dashboard
              </NavLink>
                <NavLink
                to='/host/review'
             className={({isActive}:{isActive:boolean})=> isActive ? 'px-4 py-2 text-black font-bold text-2xl rounded-lg hover:bg-orange-500 transition-colors':'px-4 py-2 text-black font-medium rounded-lg hover:bg-orange-500 transition-colors'}
              >
                Review
              </NavLink>
              <NavLink
                to='/host/income'
             className={({isActive}:{isActive:boolean})=> isActive ? 'px-4 py-2 text-black font-bold text-2xl rounded-lg hover:bg-orange-500 transition-colors':'px-4 py-2 text-black font-medium rounded-lg hover:bg-orange-500 transition-colors'}
              >
                Income
              </NavLink>
            </nav>
            <Outlet />
    </div>
    
}