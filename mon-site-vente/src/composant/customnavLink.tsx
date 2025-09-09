import { NavLink } from "react-router-dom"

interface CustomNavLinkProps {
  to: string
  children: React.ReactNode
  activeClass?: string
  inactiveClass?: string
  end?: boolean
}

export default function CustomNavLink({
  to,
  children,
  activeClass = "text-white font-bold  px-2 py-1 text-lg underline transition-all duration-200",
  inactiveClass = "text-gray-100 font-bold text-lg hover:text-white hover:scale-105 px-2 py-1 transition-all duration-200",
  end = false,
}: CustomNavLinkProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
    >
      {children}
    </NavLink>
  )
}
