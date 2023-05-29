export abstract class Vehicule {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicule {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicule {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicule {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicule {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
