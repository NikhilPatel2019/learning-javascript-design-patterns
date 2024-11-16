class Car {
    constructor({ color = 'silver', state = 'brand new' } = {}) {
      this.color = color;
      this.state = state;
    }

    drive() {
      console.log('Driving a car');
    }

    breakDown() {
      console.log('Car broke down');
    }
  }

  class Truck {
    constructor({ wheelSize = 'large', color = 'blue' } = {}) {
      this.wheelSize = wheelSize;
      this.color = color;
    }

    drive() {
      console.log('Driving a truck');
    }

    breakDown() {
      console.log('Truck broke down');
    }
  }

  export { Car, Truck };