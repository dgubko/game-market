export interface Game {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  salePrice: number;
  rating: number;
  releaseDate: string;
  genre: string;
  developer: string;
  minSystemReq?: string;
  recSystemReq?: string;
  reviews: Review[];
}

export interface User {
  id: string;
  email: string;
  username: string;
  name: string;
  registerDate: string;
  image?: string;
  bio?: string;
  location?: string;
  emailVerified?: Boolean;
}

export interface Review {
  id: string;
  title: string;
  stars: string;
  comment: string;
  userId: string;
  gameId: string;
}
