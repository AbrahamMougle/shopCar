import { useState } from "react";
import { replace, useLocation, useNavigate } from "react-router-dom";

type FetchError = {
  message: string;
  statusText: string;
  status?: number;
};

export default function Contact() {
  const dataUrl = useLocation();
  const navigate = useNavigate();

  const data = new URLSearchParams(dataUrl.search).get("message");

  const [fetchData, setFetchData] = useState<FetchError | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw {
            message: errorData.message || "No user with those credentials",
            statusText: res.statusText || "Unauthorized",
            status: res.status,
          };
        }
        return res.json();
      })
      .then(() => {
        navigate("/about", {replace:true}); // ✅ bonne redirection
      })
      .catch((err: FetchError) => {
        setFetchData(err);
      })
      .finally(() => setStatus("idle"));
  };

  return (
    <>
      {data && (
        <h1 className="text-red-700 text-2xl text-center font-semibold my-4">
          {data}
        </h1>
      )}

      {fetchData && (
        <h1 className="text-red-600 text-center font-medium mb-4">
          {fetchData.statusText}: {fetchData.message}
        </h1>
      )}

      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
        >
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Contactez-nous
          </h1>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            disabled={status === "submitting"}
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-lg font-medium transition ${
              status === "submitting"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
          >
            {status === "idle" ? "Se connecter" : "Connexion en cours..."}
          </button>
        </form>
      </div>
    </>
  );
}
