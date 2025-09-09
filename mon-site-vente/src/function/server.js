import { createServer, Model,Response } from "miragejs";

createServer({
  
  models: {
    van: Model,
    user:Model,
  },

  seeds(server) {
    server.create("van", {
      id: 1,
      name: "Mercedes Sprinter",
      price: 45000,
      description: 'Ce van simple vous offre l’essentiel pour partir à l’aventure en toute liberté. Pas de superflu, juste ce qu’il faut pour profiter de la route et des paysages. Minimaliste, mais terriblement efficace.',
      urlImage: '/vanPhoto/van1.jpg',
      type:'simple'
    });

    server.create("van", {
      id: 2,
      name: "Ford Transit",
      price: 38000,
      description: "Voyagez léger et malin avec ce van simple. Compact, fonctionnel et pratique, il est idéal pour ceux qui veulent découvrir sans se compliquer la vie. La simplicité rend chaque trajet plus agréable",
      urlImage: '/vanPhoto/van2.jpg',
      type:'simple'

    });

    server.create("van", {
      id: 3,
      name: "Volkswagen Crafter",
      price: 42000,
      description: 'Voyagez léger et malin avec ce van simple. Compact, fonctionnel et pratique, il est idéal pour ceux qui veulent découvrir sans se compliquer la vie. La simplicité rend chaque trajet plus agréable',
      urlImage: '/vanPhoto/van3.jpg',
      type:'simple'
    });

    // SIMPLE vans
server.create("van", {
  id: 19,
  name: "Volkswagen Crafter",
  price: 42000,
  description: 'Conçu pour aller à l’essentiel, ce van simple privilégie la liberté. Facile à conduire, économique et pratique, il s’adapte à tous vos projets, du week-end spontané aux voyages improvisés.',
  urlImage: '/vanPhoto/van5.jpg',
  type: "simple"
})

server.create("van", {
  id: 20,
  name: "Ford Transit",
  price: 38000,
  description:'La route est belle dans un van simple. Sobre mais fonctionnel, il vous donne tout ce dont vous avez besoin pour vos escapades, sans distractions. L’esprit du voyage se trouve dans sa simplicité.' ,
  urlImage: '/vanPhoto/van6.jpg',
  type: "simple"
})

server.create("van", {
  id: 21,
  name: "Mercedes Sprinter",
  price: 45000,
  description: "Pratique, accessible et agréable : ce van simple rend le voyage plus facile. Léger, flexible et économique, il convient parfaitement aux explorateurs débutants ou aux aventuriers qui privilégient l’essentiel.",
  urlImage: '/vanPhoto/van7.jpg',
  type: "simple"
})

server.create("van", {
  id: 4,
  name: "Renault Master",
  price: 36000,
  description: "Optez pour la simplicité pure : ce van simple vous offre mobilité et confort de base. Idéal pour ceux qui veulent savourer la route sans artifices, il incarne le plaisir du voyage authentique.",
  urlImage: '/vanPhoto/van8.jpg',
  type: "simple"
})

server.create("van", {
  id: 5,
  name: "Citroën Jumper",
  price: 34000,
  description: "Découvrez l’excellence du voyage mobile avec ce van luxury. Intérieur raffiné, finitions élégantes et confort haut de gamme transforment chaque trajet en expérience unique. Vous roulez avec style, où le luxe et la liberté se rencontrent.",
  urlImage: '/vanPhoto/van9.jpg',
  type: "luxury"
})

server.create("van", {
  id: 6,
  name: "Peugeot Boxer",
  price: 37000,
  description: "Luxe et performance réunis : ce van vous offre un confort inégalé sur la route. Sièges premium, espace généreux et technologie moderne font de chaque déplacement une expérience de voyage prestigieuse, sans renoncer à la praticité.",
  urlImage: '/vanPhoto/van10.jpg',
  type: "simple"
})


// RUGGED vans
server.create("van", {
  id: 7,
  name: "Jeep Gladiator",
  price: 52000,
  description: "Conçu pour les voyageurs exigeants, ce van luxury vous accueille dans une atmosphère élégante. Du cuir raffiné aux équipements dernier cri, chaque détail incarne le confort et la distinction. Voyager n’a jamais été aussi agréable.",
  urlImage: '/vanPhoto/van11.jpg',
  type: "rugged"
})

server.create("van", {
  id: 8,
  name: "Toyota Hilux Camper",
  price: 48000,
  description: "Offrez-vous la liberté sans sacrifier l’élégance. Ce van luxury transforme vos escapades en expériences de prestige. Ses équipements modernes et son confort haut de gamme créent une nouvelle façon de vivre la route.",
  urlImage: '/vanPhoto/van13.jpg',
  type: "rugged"
})

server.create("van", {
  id: 9,
  name: "Land Rover Defender Camper",
  price: 60000,
  description: "Ce van luxury incarne l’équilibre parfait entre mobilité et sophistication. Intérieur spacieux, finitions soignées et confort supérieur en font une maison roulante idéale pour des voyages mémorables et élégants",
  urlImage: '/vanPhoto/van14.jpg',
  type: "rugged"
})

server.create("van", {
  id: 10,
  name: "Ford Ranger Adventure",
  price: 49000,
  description: "Puissance et durabilité pour les terrains les plus rudes.",
  urlImage: '/vanPhoto/van16.jpg',
  type: "rugged"
})

server.create("van", {
  id: 11,
  name: "Mitsubishi L200 Camper",
  price: 46000,
  description: "Redéfinissez vos voyages avec ce van luxury. Chaque trajet devient une escapade raffinée, où confort et design s’allient. Ce n’est pas juste un van, c’est une expérience de vie premium sur roues.",
  urlImage: '/vanPhoto/van17.jpg',
  type: "luxury"
})

server.create("van", {
  id: 12,
  name: "Nissan Navara Camper",
  price: 47000,
  description: "Voyagez comme jamais auparavant : ce van luxury allie esthétique moderne et commodités luxueuses. Un véritable cocon roulant qui élève vos aventures au rang de souvenirs inoubliables.",
  urlImage: '/vanPhoto/van1.jpg',
  type: "rugged"
})


// LUXURY vans
server.create("van", {
  id: 13,
  name: "Mercedes Marco Polo",
  price: 72000,
  description: "Partez à l’aventure sans compromis ! Ce van camper robuste combine confort et liberté : cuisine compacte, espace nuit douillet et rangements malins. Idéal pour des escapades spontanées ou des road trips prolongés, il transforme chaque trajet en aventure",
  urlImage: '/vanPhoto/van18.jpg',
  type: "luxury"
})

server.create("van", {
  id: 14,
  name: "Volkswagen California",
  price: 68000,
  description: "Découvrez le plaisir du voyage autonome avec ce camper van. Équipé pour l’extérieur comme pour l’intérieur, il vous permet d’explorer des paysages sauvages tout en profitant d’un cocon chaleureux. C’est la maison mobile parfaite pour les esprits libres.",
  urlImage: '/vanPhoto/van20.jpg',
  type: "luxury"
})

server.create("van", {
  id: 15,
  name: "Hymer VisionVenture",
  price: 95000,
  description: "Avec son design pratique et ses aménagements intelligents, ce camper van vous accompagne partout. Des routes de montagne aux plages isolées, il assure indépendance et sérénité, tout en gardant un esprit d’aventure qui fait battre le cœur.",
  urlImage: '/vanPhoto/van21.jpg',
  type: "luxury"
})

server.create("van", {
  id: 16,
  name: "Airstream Interstate",
  price: 120000,
  description: "Conçu pour les amoureux de nature, ce camper van vous rapproche de l’essentiel. Simple, efficace et confortable, il transforme chaque halte en moment unique. Le choix parfait pour des explorateurs qui recherchent authenticité et mobilité.",
  urlImage: '/vanPhoto/van22.jpg',
  type: "rugged"
})

server.create("van", {
  id: 17,
  name: "La Strada Regent",
  price: 88000,
  description: "Ce camper van compact, mais ingénieux, combine un intérieur optimisé et une robustesse adaptée aux terrains variés. Idéal pour vos week-ends ou vos grands voyages, il rend chaque trajet aussi passionnant que la destination elle-même.",
  urlImage: '/vanPhoto/van23.jpg',
  type: "luxury"
})

server.create("van", {
  id: 18,
  name: "Westfalia Kepler",
  price: 79000,
  description: "Liberté, confort et aventure : ce camper van coche toutes les cases. Profitez d’un espace optimisé, d’un lit accueillant et d’un style de vie itinérant. Que ce soit pour quelques jours ou plusieurs semaines, il suit vos envies.",
  urlImage: '/vanPhoto/van24.webp',
  type: "luxury"
})
 server.create("user", {
        id: "123",
        email: "b@b.com",
        password: "1234",
        name: "bob",
      });
  
},

  routes() {
    this.namespace = "api";

    this.get("/vans", (schema) => {
      return schema.vans.all();
    });

    this.get("/vans/:id", (schema, request) => {
      let id = request.params.id;
      return schema.vans.find(id);
    });
    this.post("/login", async (schema, request) => {

     const {email, password} = JSON.parse(request.requestBody)
     const foundUser = schema.users.findBy({email, password})
     if (!foundUser) { 
      return new Response(401, {}, {message: 'No user with those credentials found',statut:400})
     }
     foundUser.password = undefined;
     return {
      user: foundUser,
      token: "Enjoy your pizza, here is your tokens"
     }
    });

  },
  
});
