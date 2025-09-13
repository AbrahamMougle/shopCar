// ValueCard.tsx
import type { ReactNode } from "react";
import { Shield, MousePointerClick, Compass } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon?: ReactNode; // facultatif
}

export  function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white flex flex-col items-center text-center">
      {/* Icône */}
      {icon && <div className="mb-3 text-primary-600 w-8 h-8">{icon}</div>}

      {/* Titre */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default function About() {
  const values = [
    {
      title: "Confiance",
      description:
        "Nous mettons la transparence et la fiabilité au cœur de notre service.",
      icon: <Shield className="w-8 h-8 text-primary-500" />,
    },
    {
      title: "Simplicité",
      description:
        "Réservez votre van en quelques clics et partez l’esprit léger.",
      icon: <MousePointerClick className="w-8 h-8 text-primary-500" />,
    },
    {
      title: "Aventure",
      description:
        "Vivez des expériences uniques et inoubliables sur la route.",
      icon: <Compass className="w-8 h-8 text-primary-500" />,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary-500 mb-4">À propos de nous</h1>
      <p className="text-gray-600 leading-relaxed font-poppins mb-8">
        Bienvenue dans notre boutique ! Nous croyons que chaque voyage mérite un
        véhicule fiable, confortable et adapté à vos besoins. Notre mission est
        de rendre la location de vans simple, accessible et sans stress.
      </p>

      {/* Grille des valeurs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {values.map((val) => (
          <ValueCard
            key={val.title}
            title={val.title}
            description={val.description}
            icon={val.icon}
          />
        ))}
      </div>
    </div>
  );
}

