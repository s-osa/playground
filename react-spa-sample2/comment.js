// reducerで受け取るaction名を定義
const LOAD = 'comment/LOAD'
const ADD  = 'comment/ADD'

// 初期化オブジェクト
const initialState = {
    comments: [],
}

// reducerの定義（dispatch時にコールバックされる）
export default function reducer(state = initialState, action = {}) {
    // actionの種別に応じてstateを更新する
    switch (action.type) {
        case LOAD:
            return {
                comments: action.comments,
            }
        case ADD:
            return {
                comments: state.comments.concat("This is comment " + state.comments.length),
            }
        default:
            // 初期化時はここに来る（initialStateのオブジェクトが返却される）
            return state
    }
}

// action creator の定義
export function load() {
    const comments = ['This is comment']
    // action種別と更新stateを返却(dispatchされる)
    return { type: LOAD, comments: comments }
}

export function add() {
    return { type: ADD }
}
