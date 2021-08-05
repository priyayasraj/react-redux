import { BUY_CAKE } from "./cakeTypes";
export const buyCake = () => {  // Action creator => function that returns an action
    return {               // Action
        type: BUY_CAKE
    }
}
