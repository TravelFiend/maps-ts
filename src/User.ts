import faker from 'faker';
import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: +faker.address.latitude(),  // the "+" here is the just about the same as "Number()"
      lng: +faker.address.longitude()
    }
  }
  color: string;

  info(): string {
    return `${this.name}`
  }
}
