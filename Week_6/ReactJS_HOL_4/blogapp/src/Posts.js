import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts') 
            .then(response => response.json())
            .then(json => {
                this.setState({ posts: json });
            })
            .catch(error => {
                throw new Error('Failed to fetch posts');
            });
    }

    componentDidMount() {
        this.loadPosts(); 
    }

    componentDidCatch(error, info) {
        alert(`Error: ${error.toString()}`);
        console.error("Caught an error:", error, info);
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;