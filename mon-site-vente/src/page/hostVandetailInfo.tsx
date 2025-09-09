import { useOutletContext } from "react-router-dom";
interface Van {
  id: string;          // Mirage renvoie l'id comme string
  name: string;
  price: number;
  description: string;
  urlImage: string;
  type: string;
}
export default function HostDetailInfo() {
const {description}=useOutletContext<Van>()    
    return (
        <div>
         {
            description
         }
        </div>
    )
}