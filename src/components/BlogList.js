import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, off } from "firebase/database";
import app from "../firebase";

const db = getDatabase(app);
const blogsRef = ref(db, "Blog/blogs");

function Bloglist() {
  const [blogslist, setBlogs] = useState([]);

  useEffect(() => {
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const blogArray = Object.entries(data).map(([id, blog]) => ({
          id,
          ...blog,
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
    <div className="py-4 px-24">
      <h2 className="w-full text-center font-bold text-3xl my-10">All Blogs</h2>
      {blogslist.map((blog) => (
        <div key={blog.id} className="mb-4 p-4 border rounded shadow bg-white">
          <p className="text-black font-extrabold text-2xl m-5">
            Title: {blog.BlogTitle}
          </p>
          <p className="text-gray-700 my-5 ml-5 mr-10">
            Body: {blog.BlogContent}
          </p>
          <div className="my-8 mx-5">
            <Link
              to={`/blog/view/${blog.id}`}
              className="mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded"
            >
              View
            </Link>
            <Link
              to={`/blog/edit/${blog.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bloglist;
