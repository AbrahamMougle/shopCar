import { Link, useLoaderData } from "react-router-dom";
import fetcher from "../../function/fetchVan";
export async function loaderHost(): Promise<{ vans: Van[] }> {
    return await fetcher('/api/vans')
}

interface Van {
    id: number;
    name: string;
    price: number;
    description: string;
    urlImage: string;
    type: "luxury" | "rugged" | "simple";
}
export default function HostVans() {
    const vans = useLoaderData<typeof loaderHost>().vans
    const typeColors: Record<Van["type"], string> = {
        luxury: "bg-primary-500",
        rugged: "bg-primary-700",
        simple: "bg-primary-900",
    };
    return (
        <>
            <h1 className="text-3xl font-bold">Explore Our Van option </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                {vans?.map(van => (
                    <div key={van.id} className="border rounded-lg overflow-hidden shadow-lg">
                        <Link to={`${van.id}`}>
                            <img src={van.urlImage} alt={van.name} className="w-full h-48 object-cover" />
                        </Link>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{van.name}</h3>
                            <p className="text-gray-700">
                                ${van.price} <span className="text-sm text-gray-500">/day</span>
                            </p>
                            <i
                                className={`inline-block mt-3 px-2 py-1 text-sm rounded text-white ${typeColors[van.type]}`}
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
