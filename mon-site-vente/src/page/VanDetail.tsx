import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Van {
  id: string;          // Mirage renvoie l'id comme string
  name: string;
  price: number;
  description: string;
  urlImage: string;
  type: string;
}

export default function VanDetail() {
  const { id } = useParams<{ id: string }>();
  const [van, setVan] = useState<Van | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.van))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h1 className="text-center mt-10">Loading...</h1>;
  if (!van) return <h1 className="text-center mt-10">Van not found</h1>;

  return <>
   <Link to='..'>Back to all vans</Link>
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
      <img
        src={van.urlImage}
        alt={van.name}
        className="w-full h-64 object-cover rounded"
      />
      <i
        className={`inline-block mt-2 px-2 py-1 text-sm rounded text-white ${
          van.type === "luxury"
            ? "bg-yellow-500"
            : van.type === "camper"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        {van.type}
      </i>
      <h1 className="text-xl font-bold mt-2">{van.name}</h1>
      <p className="text-gray-700 mt-1">
        ${van.price} <span className="text-sm text-gray-500">/day</span>
      </p>
      <p className="text-gray-600 mt-2">{van.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Rent this van
      </button>
    </div>
  </>;
}
