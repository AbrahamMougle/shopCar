import { useOutletContext } from "react-router-dom"
interface Van {
  id: string;          // Mirage renvoie l'id comme string
  name: string;
  price: number;
  description: string;
  urlImage: string;
  type: string;
}

export default function HostDetailPhoto() {
   const van  = useOutletContext<Van>();
    
    
    return (
        <div >
         <h1>Nom: {van.name} </h1>  
         <h1>Description: {van.description} </h1>
         <h1>Price: {van.price} </h1>  
         <h1>Type: {van.type} </h1>    
        </div>
    )
}