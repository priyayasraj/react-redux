import { BUY_ICECREAM } from "./iceCreamTypes";
export const buyIceCream = () => {  // Action creator => function that returns an action
    return {               // Action
        type: BUY_ICECREAM
    }
}
