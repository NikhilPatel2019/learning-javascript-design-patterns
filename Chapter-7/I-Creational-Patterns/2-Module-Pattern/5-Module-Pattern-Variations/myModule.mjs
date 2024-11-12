import { privateMethod } from "./privateMethod.mjs";

const myModule = () => ({
    publicMethod: () => {
        privateMethod();
    }
});

export default myModule;