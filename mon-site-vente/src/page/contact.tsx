import type { ActionFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";
import AuthLayout from "../composant/authLayout";

import {
  Form,
  useActionData,
  useNavigation,
  useLocation,
  Link,
} from "react-router-dom";
type FetchError = {
  message: string;
  statusText: string;
  status?: number;
};
export async function action({ request }: ActionFunctionArgs) {
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";

  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
 console.log(pathname);
 
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({  email, password }),    
  });

  if (!res.ok) {
    const error = await res.json();
    return { statusText: res.statusText, message: error.message };
  }

  localStorage.setItem("isAuth", "true");

  const response = redirect(pathname);
  
  throw response;
}



export default function Login() {
  const actionData = useActionData<FetchError | null>();
  const navigation = useNavigation().state;
  const location = useLocation().search;
  const urlparam = new URLSearchParams(location).get("message");

  return (
    <AuthLayout
      title="🚐 Connexion"
      message={urlparam || (actionData && `${actionData.statusText}: ${actionData.message}`)}
      >
        
      <Form method="post" replace className="space-y-4">
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
              Connexion...
            </>
          ) : (
            "Se connecter"
          )}
        </button>
      </Form>
      <>
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Inscrivez-vous
          </Link>
        </>
  
    </AuthLayout>
  );
}


