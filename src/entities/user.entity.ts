import { Nationality } from './value-objects/nationality';




export class User {
  id?: string;
  name: string;
  email: string;
  birthdate: Date;
  nationalities?: Nationality[];

  constructor(id: string, name: string, email: string, birthdate: Date, nationalities?: Nationality[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birthdate = birthdate;
    this.nationalities = nationalities
  }

}
