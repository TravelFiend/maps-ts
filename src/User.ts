import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),  // the "+" here is the just about the same as "Number()"
      lng: +faker.address.longitude()
    }
  }
}
