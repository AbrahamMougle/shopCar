import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import type { Van } from "../../../type/van";
import NavigatorDetail from "../../composant/navigatorDetail";

const vanColor: Record<Van["type"], string>={
  luxury:'bg-primary-500',
   simple:'bg-primary-700',
   rugged:'bg-primary-900' 
}

export default function HostVanDetail() {
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

  return (
    <>
      <Link
        to=".."
        relative="path"
        className="block mb-4 text-blue-600 hover:underline"
      >
        ← Back to all vans
      </Link>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Contenu principal */}
        <div className="md:col-span-3 p-4 border rounded-lg shadow-lg bg-white">
          <img
            src={van.urlImage}
            alt={van.name}
            className="w-full h-64 object-cover rounded"
          />
          <i
            className={`inline-block mt-2 px-2 py-1 text-sm rounded text-white ${vanColor[van.type] 
            }`}
          >
            {van.type}
          </i>
          <h1 className="text-xl font-bold mt-2">{van.name}</h1>
          <p className="text-gray-700 mt-1">
            ${van.price}{" "}
            <span className="text-sm text-gray-500">/day</span>
          </p>
          <p className="text-gray-600 mt-2">{van.description}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Rent this van
          </button>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 h-fit p-4 bg-white rounded-lg shadow-md">
          <NavigatorDetail />
          <Outlet context={van} />
        </div>
      </div>
    </>
  );
}
