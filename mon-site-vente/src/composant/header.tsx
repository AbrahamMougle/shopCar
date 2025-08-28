import { NavLink } from "react-router-dom"
export default function Header() {
    return <>
    <header className="bg-gradient-to-r from-orange-400 to-orange-600 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <NavLink
              to='/'
             className={({isActive}:{isActive:boolean})=> isActive ? 'px-4 py-2 text-white font-bold text-2xl rounded-lg hover:bg-orange-500 transition-colors':'px-4 py-2 text-white font-medium rounded-lg hover:bg-orange-500 transition-colors'}
            >
              🚐 #VanLife
            </NavLink>

            <nav className="flex gap-4">
              <NavLink
                to='/vans'
             className={({isActive}:{isActive:boolean})=> isActive ? 'px-4 py-2 text-white font-bold text-2xl rounded-lg hover:bg-orange-500 transition-colors':'px-4 py-2 text-white font-medium rounded-lg hover:bg-orange-500 transition-colors'}
              >
                Vans
              </NavLink>
              <NavLink
                to='/about'
             className={({isActive}:{isActive:boolean})=> isActive ? 'px-4 py-2 text-white font-bold text-2xl rounded-lg hover:bg-orange-500 transition-colors':'px-4 py-2 text-white font-medium rounded-lg hover:bg-orange-500 transition-colors'}
              >
                About
              </NavLink>
              <NavLink
                to='/host'
             className={({isActive}:{isActive:boolean})=> isActive ? 'px-4 py-2 text-white font-bold text-2xl rounded-lg hover:bg-orange-500 transition-colors':'px-4 py-2 text-white font-medium rounded-lg hover:bg-orange-500 transition-colors'}
              >
                host
              </NavLink>
            </nav>
          </div>
        </header>
    </>
    
}