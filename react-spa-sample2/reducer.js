import { combineReducers } from 'redux'
// コメント取得のreducer
import commentReducer from './comment'

// 作成したreducerをオブジェクトに追加していく
// combineReducersで１つにまとめてくれる
export default combineReducers({
    comment: commentReducer,
})
