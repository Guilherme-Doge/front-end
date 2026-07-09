export default interface User {
  name: { first: string; last: string };
  nat: string;
  email: string;
  location: { city: string; state: string; country: string };
  dob: { age: number };
  phone: string;
  cell: string;
  picture: { large: string };
  seed: string;
}