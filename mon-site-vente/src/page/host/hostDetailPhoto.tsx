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
      <h2><strong>Name:</strong>{van.name}</h2>
      <p><strong>Description:</strong>{van.description}</p>
      <p><strong>Price:</strong> ${van.price}</p>
      <p><strong>Type:</strong> {van.type}</p>
    </div>
  );
}
