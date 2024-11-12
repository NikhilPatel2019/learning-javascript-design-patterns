// Privates
const basket = [];

const doSomethingPrivate = () => {
    // ...
}

const doSomethingPublic = () => {
    // ...
}

// Create object exposed to the public
const basketModule = {
    // Add items to our basket
    addItem: (value) => {
        basket.push(value);
    },

    // Get the count of items in the basket
    getItemCount: () => {
        return basket.length;
    },

    // Public alias to a private function
    doSomething(){
        doSomethingPrivate();
    },

    // Get the total value of items in the basket
    getTotal() {
        return basket.reduce((currentSum, item) => item.price + currentSum, 0);
    }
}

export default basketModule;
