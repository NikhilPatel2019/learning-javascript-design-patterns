// Clean Approach on importing all objects from a module
// The * symbol is used to import all objects from the module
import * as staff from "./staff.mjs";

export const cakeFactory = {
    makeCupCake() {
        staff.baker.bake("cupcake");
    },
    makeMuffin() {
        staff.baker.bake("muffin");
    }
}