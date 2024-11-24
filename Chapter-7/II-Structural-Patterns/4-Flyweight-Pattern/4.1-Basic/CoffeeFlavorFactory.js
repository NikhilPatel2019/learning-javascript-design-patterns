import CoffeeFlavor from "./CoffeeFlavor.js";
import implementsInterface from "./InterfaceImplementation.js";

class CoffeeFlavorFactory {
    constructor() {
        this.flavors = {};
        this.length = 0;
    }

    getCoffeeFlavor(flavorName) {
        const CoffeeOrder = ['serveCoffee', 'getFlavor'];
        let flavor = this.flavors[flavorName];
        if (!flavor) {
          flavor = new CoffeeFlavor(flavorName);
          if (implementsInterface(flavor,  CoffeeOrder)) {
            this.flavors[flavorName] = flavor;
            this.length++;
          } else {
            console.log(`Error: ${flavorName} does not implement the CoffeeOrder interface.`);
            return null;
          }
        }
        return flavor;
      }

    getTotalCoffeeFlavorsMade() {
        return this.length;
    }
}

export default CoffeeFlavorFactory;