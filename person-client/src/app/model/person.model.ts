import { Profession } from './profession.model';

export class Person {

  id!: number;
  name!: string;
  phone!: string;
  email!: string;
  profession_id!: number;
  profession!: Profession;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
