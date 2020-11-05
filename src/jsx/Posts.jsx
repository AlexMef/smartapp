import { React, Component } from 'react';
import '../styles/Posts.scss';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postContent: "",
        }


        this.onSubmit.bind(this.onSubmit);
        this.addPost.bind(this.onSubmit);
    }

    addPost() {
        
    }

    removePost() {

    }

    onSubmit = () => {
        this.setState(()=> {
            console.log(this.state.postContent);
        })
    }

    render() {
        return (
            <div className="posts">
                <div className="posts-wrapper">
                    <div className="posts-add">
                        <textarea className="posts-add-form"
                            name="Enter post"
                            id="myTextArea"
                            value={this.state.postContent}
                            onChange={(event) => {
                                console.log(event.target.value);
                                    return this.setState({
                                    postContent: event.target.value,
                            })
                        }
                    }
                                  cols="50"
                            rows="5"></textarea>
                        <button className="posts-add-submit-button" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
                <div className="posts-content">

                </div>
            </div>
        )
    }
}

export default Posts;