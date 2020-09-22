import {DRAGONS} from "../Actions/Actions"

const defaultState = []
export default function InfoReducer(state = defaultState, action)
{
    switch(action.type)
    {
        case DRAGONS : {
            state = action.payload
            return state
        }
        default: return state
    }
}