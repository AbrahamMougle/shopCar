import { Bus, MapPin, Star } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-4">
      {/* Section Hero avec image de fond */}
      <section
        className="relative bg-cover bg-center rounded-2xl overflow-hidden h-[350px]  sm:h-[500px] flex items-center justify-center text-center px-6  "
        style={{
          backgroundImage:
            "url('/vanPhoto/van5.jpg')",
        }}
      >
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenu */}
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-3xl  md:text-5xl font-bold leading-tight mb-6">
            Découvrez la <span className="text-primary-400">liberté</span> sur roues
          </h1>
          <p className="text-sm md:text-xl mb-6 text-gray-100">
            Vivez l&apos;aventure van life avec nos véhicules aménagés. 
            Parcourez les plus beaux paysages et créez des souvenirs inoubliables.
          </p>
          <Link to="van">
            <button className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 hover:scale-105 transition-all">
              Explorer
            </button>
          </Link>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm my-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Pourquoi choisir notre service ?
        </h2>

        {/* Grille Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
            <Bus className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Confort total</h3>
            <p className="text-gray-600 text-lg">
              Des vans modernes et équipés pour voyager sans compromis.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
            <MapPin className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Liberté</h3>
            <p className="text-gray-600 text-lg">
              Explorez où vous voulez, quand vous voulez, sans contraintes.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
            <Star className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expérience unique</h3>
            <p className="text-gray-600 text-lg">
              Un mode de voyage authentique qui crée des souvenirs durables.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
