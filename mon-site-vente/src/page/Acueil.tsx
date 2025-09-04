export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Hero avec image et texte */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Image */}
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1533575770077-052fa2c609fc?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80" 
            alt="Van en pleine nature" 
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        
        {/* Texte */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Découvrez la <span className="text-orange-500">liberté</span> sur roues
          </h1>
          <p className="text-gray-600 text-lg">
            Vivez l'aventure van life avec nos véhicules entièrement aménagés. 
            Parcourez les plus beaux paysages en toute liberté et créez des souvenirs inoubliables.
          </p>
        </div>
      </section>

      {/* Section supplémentaire */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Pourquoi choisir notre service ?
        </h2>
        <p className="text-gray-600">
          Nous proposons des vans modernes, confortables et parfaitement équipés pour 
          vous offrir une expérience de voyage exceptionnelle. Que vous partiez pour 
          un week-end ou pour une grande aventure, nous avons le van qu'il vous faut.
        </p>
      </section>
    </div>
  );
}