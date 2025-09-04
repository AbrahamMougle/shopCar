import { useRouteError } from "react-router-dom"
export default function HandleErrorRouterVan() {
    const error=useRouteError()
    return (
      <div style={{ padding: "2rem" }}>
        <h1>⚠️ Oups !</h1>
        <p>{(error as { message: string }).message}</p>
      </div>
    )
  }
    
