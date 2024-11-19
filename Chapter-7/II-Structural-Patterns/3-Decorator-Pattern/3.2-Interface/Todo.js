import Interface from "./Interface.js";

const remainder = new Interface('List', ['summary', 'placeOrder']);

class Todo {
    constructor({ actions, name }){
        Interface.ensureImplements(actions, remainder);

        this.name = name;
        this.methods = actions;
    }
}

export default Todo;