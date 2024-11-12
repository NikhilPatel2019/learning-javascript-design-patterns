const basket = new WeakMap();
const doSomethingPrivate = new WeakMap();
const doSomethingElsePrivate = new WeakMap();

class BasketModule {
    constructor() {
        // privates
        basket.set(this, []);
        doSomethingPrivate.set(this, () => {
            // ...
        });
        doSomethingElsePrivate.set(this, () => {
            // ...
        });
    }

    // public aliases to private functions
    doSomething() {
        doSomethingPrivate.get(this)();
    }

    addItems(values) {
        const basketData = basket.get(this);
        basketData.push(...values);
        basket.set(this,basketData);
    }

    getItemCount() {
        return basket.get(this).length;
    }

    getTotal() {
        return basket
            .get(this)
            .reduce((currentSum, item) => currentSum + item.price, 0);
    }
}
