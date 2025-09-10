export interface Van {
  id: string;          
  name: string;
  price: number;
  description: string;
  urlImage: string;
  type:  "luxury" | "rugged" | "simple";
}