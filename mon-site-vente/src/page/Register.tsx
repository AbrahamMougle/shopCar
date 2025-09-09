import {  Form,  useActionData,  useNavigation,  useLocation,Link,
} from "react-router-dom";
import AuthLayout from "../composant/authLayout";

type FetchError = {
  message: string;
  statusText: string;
  status?: number;
};

export default function Register() {
  const actionData = useActionData<FetchError | null>();
  const navigation = useNavigation().state;
  const location = useLocation().search;
  const urlparam = new URLSearchParams(location).get("message");

  return (
    <AuthLayout
      title="📝 Inscription"
      message={urlparam || (actionData && `${actionData.statusText}: ${actionData.message}`)}
    >
      <Form method="post" replace className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <button
          type="submit"
          disabled={navigation === "submitting"}
          className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium transition hover:bg-gray-800 disabled:opacity-60 flex items-center justify-center"
        >
          {navigation === "submitting" ? (
            <>
              <span className="animate-spin mr-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
              Création...
            </>
          ) : (
            "Créer un compte"
          )}
        </button>
      </Form>
       <>
          Déjà un compte ?{" "}
          <Link to="/connecte" className="text-blue-600 hover:underline font-medium">
            Connectez-vous
          </Link>
        </>
    </AuthLayout>
  );
}
