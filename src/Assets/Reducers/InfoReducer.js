import {INFO} from "../Actions/Actions"

const defaultState = []
export default function InfoReducer(state = defaultState, action)
{
    switch(action.type)
    {
        case INFO : {
            state = action.payload
            return state
        }
        default: return state
    }
}