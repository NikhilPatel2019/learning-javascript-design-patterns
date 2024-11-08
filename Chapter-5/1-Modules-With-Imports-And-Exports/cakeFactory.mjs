import { baker} from "./staff.mjs";

export const cakeFactory = {
    makeCupCake() {
        baker.bake("cupcake");
    },
    makeMuffin() {
        baker.bake("muffin");
    }
}