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
  const { van } = useLoaderData<typeof loaderData>(); // ✅ destructuré directement
  const location = useLocation();
  const typeFilter = location.state?.typeFilter ?? "";

  const typeColors: Record<Van["type"], string> = {
    luxury: "bg-yellow-500",
    rugged: "bg-green-500",
    simple: "bg-red-500",
  };

  return (
    <>
      <Link
        to={typeFilter ? `..?type=${encodeURIComponent(typeFilter)}` : ".."}
        relative="path"
        className="text-blue-600 hover:underline"
      >
        Back {typeFilter || "All vans"}
      </Link>

      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
        <img
          src={van.urlImage}
          alt={van.name}
          className="w-full h-64 object-cover rounded"
        />

        <i
          className={`inline-block mt-2 px-2 py-1 text-sm rounded text-white ${
            typeColors[van.type]
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
    </>
  );
}
