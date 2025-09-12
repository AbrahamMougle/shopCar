import { Navigate, useLocation } from "react-router-dom";
import  type{ JSX } from "react";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const user =localStorage.getItem('isAuth')
  const location = useLocation();
  if (!user) {
    
    return <Navigate to={`/connecte?from=${location.pathname}`} state={{ message:'veuillez vous connecter' }} replace />
  }

  return children;
}
