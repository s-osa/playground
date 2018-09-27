import React from 'react'
import { connect } from 'react-redux';
// コメントreducerのactionを取得
import { load, add } from './comment'

// connectのdecorator
@connect(
    // reducer から受け取った新しい state を props に変換する
    function(state) {
        return { comments: state.comment.comments }
    },
    // actionを指定
    {
        load: load,
        adddd: add,
     }
)

export default class App extends React.Component {

    componentWillMount() {
        // コメントのactionをキックする
        this.props.load()
    }

    render() {
        // connectで取得したstateはpropsに入る
        // const { comments } = this.props
        // 初回はnullが返ってくる（initialState）、処理完了後に再度結果が返ってくる
        // console.log(comments)
        const comments = this.props.comments.map((comment) => <li key={comment} onClick={this.props.add}>{comment}</li>)

        return (
            <div onClick={this.props.adddd} >
                {comments}
            </div>
        )
    }
}
