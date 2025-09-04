 export default function  Accueil() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl overflow-hidden mb-16 mx-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
          {/* Texte */}
          <div className="flex-1 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Louez la <span className="text-blue-300">voiture de vos rêves</span> en quelques clics
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Découvrez notre flotte de véhicules premium et profitez de tarifs exclusifs. 
              Des économies jusqu'à 30% sur votre location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
                Réserver maintenant
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
                Voir nos véhicules
              </button>
            </div>
          </div>
          
          {/* Image de voiture */}
          <div className="flex-1 z-10">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80" 
              alt="Voiture de luxe" 
              className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Pourquoi nous <span className="text-blue-600">choisir</span> ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Réservation rapide</h3>
            <p className="text-gray-600">
              Réservez votre véhicule en moins de 3 minutes, 24h/24 et 7j/7
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-3">Assurance incluse</h3>
            <p className="text-gray-600">
              Tous nos véhicules sont assurés tous risques sans frais supplémentaires
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-blue-500 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3">Meilleur prix garanti</h3>
            <p className="text-gray-600">
              Nous garantissons les prix les plus compétitifs du marché
            </p>
          </div>
        </div>
      </section>

      {/* Section Véhicules Populaires */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nos <span className="text-blue-600">véhicules populaires</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Voiture 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img 
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80" 
              alt="SUV Premium" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">SUV Premium</h3>
              <p className="text-gray-600 mb-3">À partir de 65€/jour</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                Réserver
              </button>
            </div>
          </div>
          
          {/* Voiture 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img 
              src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80" 
              alt="Berline Familiale" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Berline Familiale</h3>
              <p className="text-gray-600 mb-3">À partir de 45€/jour</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                Réserver
              </button>
            </div>
          </div>
          
          {/* Voiture 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img 
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80" 
              alt="Citadine Économique" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Citadine Économique</h3>
              <p className="text-gray-600 mb-3">À partir de 25€/jour</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                Réserver
              </button>
            </div>
          </div>
          
          {/* Voiture 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img 
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80" 
              alt="Voiture Sportive" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Voiture Sportive</h3>
              <p className="text-gray-600 mb-3">À partir de 120€/jour</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                Réserver
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="bg-blue-50 rounded-2xl p-8 text-center mb-16 mx-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ne manquez pas nos offres exclusives
        </h2>
        <p className="text-gray-600 mb-6">
          Inscrivez-vous à notre newsletter pour recevoir nos meilleurs tarifs et promotions
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Votre email" 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            S'inscrire
          </button>
        </div>
      </section>
    </div>
  );
}