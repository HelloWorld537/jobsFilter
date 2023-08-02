import { ADD_POSITION } from "./positions-action";
export const positionReducer = (state = [], action) => {
    if (action.type == ADD_POSITION) {
        return action.positions
    }
    else {
        return state
    }
}