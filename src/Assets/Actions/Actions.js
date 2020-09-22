//2.action types
export const INFO = "COMPANY_INFO"
export const LAUNCHES = "LAUNCHES_INFO"
export const SELECT_PAGE = "SELECT_PAGE"
export const ROCKETS = "ROCKETS_INFO"
export const DRAGONS = "DRAGONS_INFO"

//3.Action Creators
export const getInfo = info => {
    return{
        type: INFO,
        payload: info
    }
}

export const getLaunches = launches => {
    return{
        type: LAUNCHES,
        payload: launches
    }
}

export const handlePageChange = page => {    
    return {
        type: SELECT_PAGE,
        payload: page
    }
}

export const getRockets = rockets => {
    return{
        type: ROCKETS,
        payload: rockets
    }
}

export const getDragons = dragons => {
    return{
        type: DRAGONS,
        payload: dragons
    }
}
