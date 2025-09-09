import {
  Link,
  useLocation,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router-dom";
import fetcher from "../function/fetchVan";

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  urlImage: string;
  type: "luxury" | "rugged" | "simple";
}

// ✅ Le loader retourne bien { van: Van }
export async function loaderData({
  params,
}: LoaderFunctionArgs): Promise<{ van: Van }> {
  if (!params.id) {
    throw new Error("ID du van manquant");
  }
  return fetcher(`/api/vans/${params.id}`);
}

export default function VanDetail() {
  const { van } = useLoaderData<typeof loaderData>();
  const location = useLocation();
  const typeFilter = location.state?.typeFilter ?? "";

  // 🎨 Couleurs sobres + cohérentes
  const typeColors: Record<Van["type"], string> = {
    luxury: "bg-primary-500",
    rugged: "bg-primary-700",
    simple: "bg-primary-900",
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Lien retour */}
      <Link
        to={typeFilter ? `..?type=${encodeURIComponent(typeFilter)}` : ".."}
        relative="path"
        className="inline-block text-sm text-gray-600 hover:text-gray-900 transition-colors mb-6"
      >
        ← Retour {typeFilter || "tous les vans"}
      </Link>

      {/* Carte van */}
      <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
        <img
          src={van.urlImage}
          alt={van.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <span
            className={`inline-block px-3 py-1 text-xs rounded text-white ${typeColors[van.type]}`}
          >
            {van.type}
          </span>

          <h1 className="text-2xl font-bold mt-3 text-gray-900">{van.name}</h1>
          <p className="text-gray-700 mt-2">
            <span className="text-lg font-semibold">${van.price}</span>{" "}
            <span className="text-sm text-gray-500">/jour</span>
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">{van.description}</p>

          <button className={`mt-6 w-full md:w-auto px-6 py-3 ${typeColors[van.type]} text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition`}>
            Réserver ce van
          </button>
        </div>
      </div>
    </div>
  );
}
