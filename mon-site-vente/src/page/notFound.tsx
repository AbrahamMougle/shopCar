export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oups ! La page que vous cherchez n'existe pas.</p>
      <a href="/" className="text-blue-600 hover:underline">Retour à l'accueil</a>
    </div>
  );
}
