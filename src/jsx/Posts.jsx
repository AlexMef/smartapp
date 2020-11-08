import {React, Component} from 'react';
import '../styles/Posts.scss';
import Post from "../jsx/Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            textAreaContent: "",
            placeholder: "Leave comment",
        }


        // this.onSubmit.bind(this.onSubmit);
    }

    createPost = (item, key) => {
        return <Post postText={item} key={key}/>
    }

    createPosts = () => {
        return this.state.posts.map((item, key) => (this.createPost(item, key)));
    }

    // createPost = () => {
    //     let post = <Post value={this.state.postContent}/>
    //     return post;
    // }


    removePost() {

    }

    onSubmit = () => {
        if (this.state.textAreaContent !== "") {
            this.setState({
                posts: this.state.posts.concat([this.state.textAreaContent]),
                textAreaContent: "",
            })
        }
    }

    onClear = () => {
        this.setState({
            textAreaContent: "",
        })
    }

    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.setState(state => this.state.onSubmit)
        }
    }



    render() {
        return (
            <div className="posts">
                <div className="posts-content">
                        <div className="posts-add">
                        <input type="textarea" className="posts-add-form"
                                  name="Enter post"
                                  id="myTextArea"
                                  placeholder={this.state.placeholder}
                                  value={this.state.textAreaContent}
                                  onChange={(event) => {
                                      console.log(event.target.value);
                                      return this.setState({
                                          textAreaContent: event.target.value,
                                      })
                                  }
                                  }
                                  onKeyPress={this.onKeyPress}
                        />
                            <div className="posts-add-button-block">
                                <button className="posts-add-button" onClick={this.onSubmit}>Submit</button>
                                <button className="posts-add-button" onClick={this.onClear}>Clear</button>
                            </div>
                        </div>
                        {this.createPosts()}
                    </div>
                </div>
        )
    }
}

export default Posts;