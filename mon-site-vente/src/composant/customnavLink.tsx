import { NavLink } from "react-router-dom";

interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
  activeClass?: string;
  inactiveClass?: string;
  end?: boolean; // Correction ici
}

export default function CustomNavLink({
  to,
  children,
  activeClass = "px-4 py-2 text-red-500 font-bold text-2xl rounded-lg hover:bg-orange-500 transition-colors",
  inactiveClass = "px-4 py-2 text-yellow-500 font-medium rounded-lg hover:bg-orange-500 transition-colors",
  end = false, // Valeur par défaut
}: CustomNavLinkProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
    >
      {children}
    </NavLink>
  );
}
