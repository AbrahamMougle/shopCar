import { useOutletContext } from "react-router-dom"
interface Van {
  id: string;          // Mirage renvoie l'id comme string
  name: string;
  price: number;
  description: string;
  urlImage: string;
  type: string;
}
export default function HostDetailPrice() {
    const {price}=useOutletContext<Van>()
    return (
        <div className=" text-3xl">
         le prix du {price}
            
        </div>
    )
}