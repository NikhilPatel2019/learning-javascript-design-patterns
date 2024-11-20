import Interface from "./Interface.js";

const MacBook = new Interface("MacBook", [
    "addEngraving",
    "addParallels",
    "add4GBRam",
    "add8GBRam",
    "addCase",
    "getPrice",
]);

class MacBookPro {
    // implements MacBook
    addEngraving() {}

    addParallels() {}

    add4GBRam() {}

    add8GBRam() {}

    addCase() {
        return "Case added";
    }

    getPrice() {
        // Base price
        return 900.0;
    }
}

export { MacBook, MacBookPro };