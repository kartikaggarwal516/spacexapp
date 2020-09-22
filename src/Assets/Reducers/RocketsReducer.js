import {ROCKETS} from "../Actions/Actions"

const defaultState = []
export default function InfoReducer(state = defaultState, action)
{
    switch(action.type)
    {
        case ROCKETS : {
            state = action.payload
            return state
        }
        default: return state
    }
}