import React from 'react'
import info from './InfoReducer'
import launches from "./LaunchesReducer"
import page from "./PageReducer"
import rockets from "./RocketsReducer"
import dragons from "./DragonsReducer"
import { combineReducers } from 'redux'


export default combineReducers({
    info: info,
    launches:launches,
    activePage:page,
    rockets:rockets,
    dragons:dragons
})
