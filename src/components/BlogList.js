import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, off } from 'firebase/database';
import app from '../firebase';

const db = getDatabase(app);
const blogsRef = ref(db, 'Blog/blogs');

function Bloglist () {
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
        <div className="p-4">
      <h2 className="w-full text-center font-bold text-xl mb-4">All Blogs List</h2>
      {blogslist.map(blog => (
        <div key={blog.id} className="mb-4 p-4 border rounded shadow bg-white">
          <p className="text-black font-semibold">Title: {blog.BlogTitle}</p>
          <p className="text-gray-700">Body: {blog.BlogContent}</p>
          <div className="mt-2">
            <Link
              to={`/blog/${blog.id}`}
              className="mr-2 bg-indigo-500 hover:bg-indigo-700 text-black font-bold py-1 px-2 rounded"
            >
              View
            </Link>
            <Link
              to={`/blog/edit/${blog.id}`}
              className="bg-blue hover:bg-blue-700 text-black font-bold py-1 px-2 rounded"
            >
              Edit
            </Link>
            
          </div>
        </div>
      ))}
    </div>

    );
};

export default Bloglist;