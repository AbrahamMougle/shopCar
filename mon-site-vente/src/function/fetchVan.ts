/**
 * Fonction générique pour récupérer des données depuis une API.
 *
 * @template T - Le type des données attendues depuis l'API.
 * @param url - URL complète de l'API (ex: "/api/vans")
 * @returns Promise<T> - Promesse résolue avec les données typées.
 * @throws Error si la requête échoue (statut HTTP non OK)
 *
 * @example
 * interface Van {
 *   id: number;
 *   name: string;
 *   price: number;
 *   description: string;
 *   urlImage: string;
 *   type: string;
 * }
 *
 * // Si l'API renvoie { vans: Van[] }
 * async function loadVans() {
 *   try {
 *     const data = await fetcher<{ vans: Van[] }>("/api/vans");
 *     console.log(data.vans); // Tableau de Van
 *   } catch (err) {
 *     console.error(err);
 *   }
 * }
 */
export default async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
  }

  const data: T = await response.json();
  return data;
}
