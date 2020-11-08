import {Component, React} from 'react';
import '../styles/Post.scss';

import like_icon from "../img/like_icon.png";

class Post extends Component {
    constructor(props) {
        super(props);
        this.date = new Date();
        this.state = {
            likesCount: 0,
        }
    }

    increaseLikesCount = () => {
        this.setState({
            likesCount: this.state.likesCount + 1,
        })
    }

    getCurrentDate = () => {
        // let date = new Date();
        let date = this.date;
        return (date.getDate() + "." + date.getMonth() + "." + date.getFullYear())
    }

    getCurrentTime = () => {
        // let date = new Date();
        let date = this.date;
        return (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }

    render() {
        return (
            <div className="post">
                <div className="post-content">{this.props.postText}</div>
                <div className="post-properties">
                    <div className="post-properties-date-of-posting" >
                        <div className="post-properties-date">{this.getCurrentDate()}</div>
                        <div className="post-properties-time">{this.getCurrentTime()}</div>

                    </div>
                    <div className="post-properties-likes">
                        <button onClick={this.increaseLikesCount}
                                className="post-properties-likes-button"><img src={like_icon} alt=""/>
                        </button>
                        <div className="post-properties-likes-count">{this.state.likesCount}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;