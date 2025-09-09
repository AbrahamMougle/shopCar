import { useState } from "react"
import { Menu, X } from "lucide-react"
import CustomNavLink from "./customnavLink"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary-500 text-white shadow-md fixed w-full z-50">
      <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <CustomNavLink 
          to="/" 
        >
         VanLife
        </CustomNavLink>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6  ">
          <CustomNavLink to="host">Shop</CustomNavLink>
          <CustomNavLink to="about">About</CustomNavLink>
          <CustomNavLink to="van">shop</CustomNavLink>
          <CustomNavLink to="connecte">Connect</CustomNavLink>
        </nav>

        {/* Bouton burger (mobile) */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-primary-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-primary-500 border-t border-primary-700">
          <div className="flex flex-col gap-4 px-6 py-4 text-base font-medium">
           <CustomNavLink to="host">Shop</CustomNavLink>
          <CustomNavLink to="about">About</CustomNavLink>
          <CustomNavLink to="van">shop</CustomNavLink>
          <CustomNavLink to="connecte">Connect</CustomNavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
