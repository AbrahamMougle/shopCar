import { Outlet, Navigate } from "react-router-dom"

export default function Auth() {
    const isAuth=false
    if (!isAuth) {
       return < Navigate to='contact?message=Connecter vous  d"abord'/>
    }
     return <Outlet/>
}