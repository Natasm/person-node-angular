export class Profession {
  id!: number;
  name!: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
