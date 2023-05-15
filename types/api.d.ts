export interface Game {}

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
