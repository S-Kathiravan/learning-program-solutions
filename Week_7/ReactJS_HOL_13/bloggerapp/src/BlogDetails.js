import React from 'react';
import { blogs } from './blogs';

function BlogDetails() {
    return (
        <div>
            <h1>Blog Details</h1>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h4>{blog.author}</h4>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogDetails;