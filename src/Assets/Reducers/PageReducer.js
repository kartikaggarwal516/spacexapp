import {SELECT_PAGE} from "../Actions/Actions"

const defaultState = 1;
export default function PageReducer(state = defaultState, action){
    switch(action.type) {
        case SELECT_PAGE: {            
            state = action.payload
            return state
        }       
        default:
            return state
    }
}