import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, off } from 'firebase/database';
import app from '../firebase';

const db = getDatabase(app);
const blogsRef = ref(db, 'Blog/blogs');

const Bloglist = () => {
    const [blogslist, setBlogs] = useState([]);

    useEffect(() => {
        onValue(blogsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const blogArray = Object.entries(data).map(([id, blog]) => ({
                    id,
                    ...blog
                }));
                setBlogs(blogArray);
            } else {
                setBlogs([]);
            }
        });

        // Cleanup the listener when the component unmounts
        return () => off(blogsRef);
    }, []);

    return (
        <div>
            <h2 className="w-full text-center font-bold text-xl">All blogs List</h2>
            {blogslist.map(blog => (
                <div key={blog.id}>
                    <p className="text-black">Title: {blog.BlogTitle}</p>
                    <p>Body: {blog.BlogContent}</p>
                    <Link to={`/blog/${blog.id}`}
                        className="mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 border border-indigo-500 rounded"
                    >
                        View
                    </Link>
                    <Link to={`/blog/edit/${blog.id}`}
                        className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                    >
                        Edit
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Bloglist;