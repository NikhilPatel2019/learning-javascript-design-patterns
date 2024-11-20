import MacBookDecorator from "./MacbookDecorator.js";

class CaseDecorator extends MacBookDecorator {
    constructor(macbook){
        super(macbook);
    }

    addCase() {
        return `${this.macbook.addCase()}Adding case to macbook`;
    }

    getPrice() {
        return this.macbook.getPrice() + 45;
    }
}

export default CaseDecorator;