import { Link } from "react-router-dom"
export default function Header() {
    return <>
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
                About
              </Link>
              <Link
                to='/host'
                className="px-4 py-2 text-white font-medium rounded-lg hover:bg-orange-500 transition-colors"
              >
                host
              </Link>
            </nav>
          </div>
        </header>
    </>
    
}