import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filters-actions"
export const filterReducer = (state = [], action) => {
    if (action.type === ADD_FILTER) {
        if (!state.includes(action.filter)) {
            return [...state, action.filter]
        }
        return state
    }
    else if (action.type === REMOVE_FILTER) {

        return state.filter(item => item !== action.filter)
    }
    else if (action.type === CLEAR_FILTER) {
        return []
    }
    else {
        return state
    }
}