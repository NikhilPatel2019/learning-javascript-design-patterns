// Interface constructor
function Interface(name, methods) {
    if (arguments.length !== 2) {
        throw new Error('Interface constructor called with ' + arguments.length + ' arguments, but expected exactly 2.');
    }
    this.name = name;
    this.methods = [];
    for (let i = 0; i < methods.length; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error('Interface constructor expects method names to be passed in as strings.');
        }
        this.methods.push(methods[i]);
    }
}

// Ensure implementation of an interface
Interface.ensureImplements = function (object, ...interfaces) {
    if (arguments.length < 2) {
        throw new Error('Function Interface.ensureImplements called with ' + arguments.length + ' arguments, but expected at least 2.');
    }

    for (let i = 0; i < interfaces.length; i++) {
        const interfaceInstance = interfaces[i];
        if (interfaceInstance.constructor !== Interface) {
            throw new Error('Function Interface.ensureImplements expects arguments two and above to be instances of Interface.');
        }

        for (let j = 0; j < interfaceInstance.methods.length; j++) {
            const method = interfaceInstance.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error('Function Interface.ensureImplements: object does not implement the ' + interfaceInstance.name + ' interface. Method ' + method + ' was not found.');
            }
        }
    }
};

export default Interface;