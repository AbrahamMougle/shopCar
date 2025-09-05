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
      description: "Un van robuste et spacieux, idéal pour les voyages.",
      urlImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      type:'simple'
    });

    server.create("van", {
      id: 2,
      name: "Ford Transit",
      price: 38000,
      description: "Van fiable avec une grande capacité de chargement.",
      urlImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      type:'simple'

    });

    server.create("van", {
      id: 3,
      name: "Volkswagen Crafter",
      price: 42000,
      description: "Confort et performance pour un usage professionnel.",
      urlImage: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80",
      type:'simple'
    });

    // SIMPLE vans
server.create("van", {
  id: 19,
  name: "Volkswagen Crafter",
  price: 42000,
  description: "Confort et performance pour un usage professionnel.",
  urlImage: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "simple"
})

server.create("van", {
  id: 20,
  name: "Ford Transit",
  price: 38000,
  description: "Polyvalent et fiable, parfait pour les livraisons urbaines.",
  urlImage: "https://images.unsplash.com/photo-1604586376811-0a13e31d2d3a?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "simple"
})

server.create("van", {
  id: 21,
  name: "Mercedes Sprinter",
  price: 45000,
  description: "Un classique robuste et efficace pour tout usage.",
  urlImage: "https://images.unsplash.com/photo-1597001351049-95279a7bc01f?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "simple"
})

server.create("van", {
  id: 4,
  name: "Renault Master",
  price: 36000,
  description: "Fiabilité française et espace de chargement généreux.",
  urlImage: "https://images.unsplash.com/photo-1633921526980-176a4a52c57f?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "simple"
})

server.create("van", {
  id: 5,
  name: "Citroën Jumper",
  price: 34000,
  description: "Compact et économique, adapté aux trajets urbains.",
  urlImage: "https://images.unsplash.com/photo-1602142069015-c4fbcbb40cd7?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "simple"
})

server.create("van", {
  id: 6,
  name: "Peugeot Boxer",
  price: 37000,
  description: "Un fourgon spacieux avec un excellent rapport qualité-prix.",
  urlImage: "https://images.unsplash.com/photo-1602142093476-2f61a97af8c6?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "simple"
})


// RUGGED vans
server.create("van", {
  id: 7,
  name: "Jeep Gladiator",
  price: 52000,
  description: "Conçu pour l’aventure tout-terrain, robuste et puissant.",
  urlImage: "https://images.unsplash.com/photo-1602142283061-39fb8d1cb212?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "rugged"
})

server.create("van", {
  id: 8,
  name: "Toyota Hilux Camper",
  price: 48000,
  description: "Icône de la fiabilité en conditions extrêmes.",
  urlImage: "https://images.unsplash.com/photo-1602142253147-d9a3f2e5840a?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "rugged"
})

server.create("van", {
  id: 9,
  name: "Land Rover Defender Camper",
  price: 60000,
  description: "Parfait pour les expéditions dans les zones difficiles.",
  urlImage: "https://images.unsplash.com/photo-1627483307543-9e7087f1d89f?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "rugged"
})

server.create("van", {
  id: 10,
  name: "Ford Ranger Adventure",
  price: 49000,
  description: "Puissance et durabilité pour les terrains les plus rudes.",
  urlImage: "https://images.unsplash.com/photo-1598387485626-2f21d48a8147?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "rugged"
})

server.create("van", {
  id: 11,
  name: "Mitsubishi L200 Camper",
  price: 46000,
  description: "Un pick-up tout-terrain transformé en maison roulante.",
  urlImage: "https://images.unsplash.com/photo-1623176346149-d7a2a6a21f44?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "rugged"
})

server.create("van", {
  id: 12,
  name: "Nissan Navara Camper",
  price: 47000,
  description: "Un baroudeur fiable et adapté aux longs voyages.",
  urlImage: "https://images.unsplash.com/photo-1633921484547-f10f6fb2d8a9?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "rugged"
})


// LUXURY vans
server.create("van", {
  id: 13,
  name: "Mercedes Marco Polo",
  price: 72000,
  description: "Élégance et confort haut de gamme pour voyager avec style.",
  urlImage: "https://images.unsplash.com/photo-1623176339513-13c1d2e2eb06?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "luxury"
})

server.create("van", {
  id: 14,
  name: "Volkswagen California",
  price: 68000,
  description: "Un van mythique réinventé avec luxe et modernité.",
  urlImage: "https://images.unsplash.com/photo-1602142273519-07f657668218?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "luxury"
})

server.create("van", {
  id: 15,
  name: "Hymer VisionVenture",
  price: 95000,
  description: "Le futur du van aménagé, luxueux et intelligent.",
  urlImage: "https://images.unsplash.com/photo-1623176372224-34d7311c3d65?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "luxury"
})

server.create("van", {
  id: 16,
  name: "Airstream Interstate",
  price: 120000,
  description: "Le summum du luxe nomade, avec équipements premium.",
  urlImage: "https://images.unsplash.com/photo-1623176360436-8c84f9d81c8a?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "luxury"
})

server.create("van", {
  id: 17,
  name: "La Strada Regent",
  price: 88000,
  description: "Un van allemand luxueux pensé pour le confort ultime.",
  urlImage: "https://images.unsplash.com/photo-1623176363852-b0fd2f6f8c32?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  type: "luxury"
})

server.create("van", {
  id: 18,
  name: "Westfalia Kepler",
  price: 79000,
  description: "Design moderne et équipements haut de gamme.",
  urlImage: "https://images.unsplash.com/photo-1623176374432-22182c9ff29e?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
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
