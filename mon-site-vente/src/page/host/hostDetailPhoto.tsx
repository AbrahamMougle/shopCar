import { useOutletContext } from "react-router-dom";

interface Van {
  id: string;          // Mirage renvoie l'id comme string
  name: string;
  price: number;
  description: string;
  urlImage: string;
  type: string;
}

export default function HostDetailPhoto() {
  const van = useOutletContext<Van>();

  return (
    <div className="van-detail">
      <img 
        src={van.urlImage} 
        alt={`Image of ${van.name}`} 
        className="van-image"
      />
      
    </div>
  );
}
