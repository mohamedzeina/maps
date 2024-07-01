import { faker } from '@faker-js/faker';

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {}
}

// using faker API to randomly generate the fields for the user
