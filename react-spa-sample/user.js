const LOAD = 'user/LOAD'

const initialState = {
    users: null,
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case LOAD:
            return {
                users: action.results,
            }
        default:
            return state
    }
}

export function load() {
    return (dispatch, getState, client) => {
        return (
            client
                .get('https://randomuser.me/api/')
                .then(res => res.data)
                .then(data => {
                    const results = data.results
                    dispatch({ type: LOAD, results })
                })
        )
    }
}