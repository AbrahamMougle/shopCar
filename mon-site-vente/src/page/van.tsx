import { useSearchParams, Link, useLoaderData } from "react-router-dom";
import { Filter } from "lucide-react"; 
import fetcher from "../function/fetchVan";
import type { Van } from "../../type/van";
export async function datafetch(): Promise<{ vans: Van[] }> {
  return await fetcher("/api/vans");
}

export default function Vans() {
  const dataLoader = useLoaderData<typeof datafetch>();
  const [searchParam, setSearchParam] = useSearchParams();
  const typeFilter = searchParam.get("type");
  // 🎨 Couleurs sobres + cohérentes
  const typeColors: Record<Van["type"], string> = {
    luxury: "bg-primary-500",
    rugged: "bg-primary-700",
    simple: "bg-primary-900",
  };

  const vanfilter = typeFilter
    ? dataLoader.vans.filter(
        (char) => char.type.toLowerCase() === typeFilter.toLowerCase()
      )
    : dataLoader.vans;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Zone filtre alignée à droite */}
      <div className="flex justify-end items-center gap-2 mb-8">
        <Filter className="w-5 h-5 text-gray-600" />
        <select
          value={typeFilter ?? ""}
          onChange={(e) =>
            e.target.value ? setSearchParam({ type: e.target.value }) : setSearchParam({})
          }
          className="w-48 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"
        >
          <option value="">Tous les types</option>
          <option value="simple">Simple</option>
          <option value="luxury">Luxury</option>
          <option value="rugged">Rugged</option>
        </select>
      </div>

      {/* Titre */}
      <h1 className="text-2xl md:text-3xl font-normal text-center text-gray-900 mb-5">
        Explorez nos vans
      </h1>

      {/* Grille des vans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {vanfilter?.map((van) => (
          <div
            key={van.id}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <Link to={`${van.id}`} state={{ typeFilter }}>
              <img
                src={van.urlImage}
                alt={van.name}
                className="w-full h-52 object-cover hover:scale-105 transition-transform"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {van.name}
              </h3>
              <p className="text-gray-700 mb-3">
                ${van.price}{" "}
                <span className="text-sm text-gray-500">/jour</span>
              </p>
              <span
                className={`inline-block px-3 py-1 text-xs font-medium text-white ${typeColors[van.type]}`}
              >
                {van.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
