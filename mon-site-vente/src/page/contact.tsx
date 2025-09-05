import { Form, useActionData,redirect,useNavigation, useLocation } from "react-router-dom";

type FetchError = {
  message: string;
  statusText: string;
  status?: number;
};

export async function action({ request }: { request: Request }) {

const pathname=new URL(request.url).searchParams.get('redirectTo')|| '/'
console.log(pathname);

  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  await new Promise(resolve => setTimeout(resolve, 1000))// pour similer un retard enfin  de voir les effet du boutons
 const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
  
    const error = await res.json();
    console.log(error);
    
    return { statusText: res.statusText, message: error.message };
  }
  
  localStorage.setItem('isAuth','true')// il nous faut ce bout de code pour ne pas revenir encore sur la page contact car lorsque la redirectyion est faite le loader du router correspondant va s'executer et si la valeur de isAuth n'est pas different des falsy il renvoie encore a la page de contact 
  
const response=redirect(pathname)
response.body=true
throw response

}


export default function Contact() {
  const actionData = useActionData<FetchError | null>();
  const navigation=useNavigation().state
  const location=useLocation().search
  const urlparam=(new URLSearchParams(location)).get('message')
  
  

  return (<>
  {
    urlparam && <h1 className="text-red-600 text-center"> {urlparam} </h1>
  }
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Form
      replace
        method="post"
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Contactez-nous
        </h1>

        {actionData && (
          <p className="text-red-600 text-center font-medium mb-4">
            {actionData.statusText}: {actionData.message}
          </p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
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
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium transition hover:bg-blue-600 disabled:opacity-60"
          disabled={navigation === "submitting"}
        >
          {navigation === "submitting" ? (
            <>
              <span className="animate-spin mr-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
              Envoi...
            </>
          ) : (
            "Envoyer"
          )}
        </button>
      </Form>
    </div>
    </>
  );
}
