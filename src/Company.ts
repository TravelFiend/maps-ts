import faker, { fake } from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName(),
      this.catchPhrase = faker.company.catchPhrase(),
      this.location = {
        lat: +faker.address.latitude(),
        lng: +faker.address.longitude()
      }
  }
  color: string;

  info(): string {
    return `<div>
    <h1>${this.companyName}</h1>
    <p>${this.catchPhrase}</p>
    </div>`
  }
}
