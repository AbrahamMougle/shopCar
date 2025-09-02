import CustomNavLink from "./customnavLink"
export default function Header() {
    return <>
    <header className="bg-gradient-to-r from-orange-400 to-orange-600 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            
            <CustomNavLink to="/">🚐 #VanLife</CustomNavLink>

            <nav className="flex gap-4">
              <CustomNavLink to="host">host</CustomNavLink>
              <CustomNavLink to="about">About</CustomNavLink> 
              <CustomNavLink to="van">Vans</CustomNavLink>
              <CustomNavLink to="contact">Contact</CustomNavLink>
            </nav>
          </div>
        </header>
    </>
    
}