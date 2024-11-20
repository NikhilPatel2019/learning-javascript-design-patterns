import Interface from "./Interface.js";
import { MacBook } from "./Macbook.js";

class MacBookDecorator {
    constructor(macbook) {
        Interface.ensureImplements(macbook, MacBook);
        this.macbook = macbook;
    }

    addEngraving() {
        return this.macbook.addEngraving();
    }

    addParallels() {
        return this.macbook.addParallels();
    }

    add4GBRam() {
        return this.macbook.add4GBRam();
    }

    add8GBRam() {
        return this.macbook.add8GBRam();
    }

    addCase() {
        return this.macbook.addCase();
    }

    getPrice() {
        return this.macbook.getPrice();
    }
}

export default MacBookDecorator;