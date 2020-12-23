import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts
    };
  }
  handleClick(id) {
    const newPosts = this.state.posts;
    const index = newPosts.findIndex((v) => v.id === id);
    let post = newPosts[index];
    post.good += 1;
    newPosts.splice(index, 1, post);
    this.setState({
      posts: newPosts
    });
  }
  render() {
    const posts = this.state.posts;
    const lists = posts.map((post) => {
      return (
        <li key={post.id}>
          <div className="title">
            <div>{post.title}</div>
            <div>
              <button onClick={() => this.handleClick(post.id)}>
                いいね：{post.good}
              </button>
            </div>
          </div>
          <div>{post.body}</div>
        </li>
      );
    });
    return (
      <div className="post">
        <div className="post-info">
          <ol>{lists}</ol>
        </div>
      </div>
    );
  }
}

export default Post;
