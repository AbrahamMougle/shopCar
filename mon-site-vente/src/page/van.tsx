import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import fetcher from "../function/fetchVan";

interface Van {
  id: number;
  name: string;
  price: number;
  description: string;
  urlImage: string;
  type: string;
}
export default function Vans() {
  const [vans, setVans] = useState<Van[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchParam, setSearchParam] = useSearchParams();
  const typeFilter = searchParam.get("type");
  const vanfilter = typeFilter
    ? vans?.filter((char) => char.type.toLocaleLowerCase() === typeFilter)
    : vans;


  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const dataFetch = await fetcher<{vans:Van[]}>("/api/vans");
        setVans(dataFetch.vans)
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);

  if (loading) {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh] space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <span className="text-xl font-semibold text-gray-700 animate-pulse">
        Chargement des vans...
      </span>
    </div>
  );
}

  if (error) return <div className="text-red-600">Erreur : {error}</div>;

  return (
    <>
      <div className="flex gap-4 justify-center p-6">
        <button
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => setSearchParam({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => setSearchParam({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => setSearchParam({ type: "rugged" })}
        >
          Rugged
        </button>
        <button
          disabled={!["simple", "luxury", "rugged"].includes(typeFilter ?? "")}
          onClick={() => setSearchParam({})}
          className={`px-6 py-2 rounded-lg transition ${
            ["simple", "luxury", "rugged"].includes(typeFilter ?? "")
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        >
          Clear
        </button>
      </div>

      <h1 className="text-3xl font-bold p-4">Explore Our Van options</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {vanfilter?.map((van) => (
          <div key={van.id} className="border rounded-lg overflow-hidden shadow-lg">
            <Link to={`${van.id}`} state={{ typeFilter }}>
              <img
                src={van.urlImage}
                alt={van.name}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{van.name}</h3>
              <p className="text-gray-700">
                ${van.price} <span className="text-sm text-gray-500">/day</span>
              </p>
              <i
                className={`inline-block mt-3 px-2 py-1 text-sm rounded text-white ${
                  van.type === "luxury"
                    ? "bg-yellow-500"
                    : van.type === "camper"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {van.type}
              </i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
