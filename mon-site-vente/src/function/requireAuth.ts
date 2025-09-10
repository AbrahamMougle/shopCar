import { redirect } from "react-router-dom";
export default function requireAuth(resquest:Request) {
  const isAuth=localStorage.getItem("isAuth")
   const pathname = new URL(resquest.url).pathname
  if (!isAuth) {
    return  redirect(`/connecte?message=veuillez connecter.&redirectTo=${pathname}`)
  
  }
  return null
  
}