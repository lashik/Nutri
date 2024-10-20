import React, { useState, useEffect } from "react";

import { getDatabase, ref, get, update, remove } from "firebase/database";
import app from "../firebase";
import { useParams, useNavigate } from "react-router-dom";

const db = getDatabase(app);

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ BlogTitle: "", BlogContent: "" });

  useEffect(() => {
    const fetchBlog = async () => {
      const blogRef = ref(db, `Blog/blogs/${id}`);
      const snapshot = await get(blogRef);
      if (snapshot.exists()) {
        setBlog(snapshot.val());
      } else {
        console.log("No such blog!");
        navigate("/admin"); // Redirect if blog not found
      }
    };

    fetchBlog();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogRef = ref(db, `Blog/blogs/${id}`);
    await update(blogRef, blog);
    navigate("/admin");
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const blogRef = ref(db, `Blog/blogs/${id}`);
      await remove(blogRef);
      navigate("/admin");
    }
  };

  return (
    <div className="w-[70%]  mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Edit Blog
      </h2>
      <form onSubmit={handleSubmit} className="mt-10 space-y-10">
        <div>
          <label
            htmlFor="Title"
            className="ml-2 text-lg font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="BlogTitle"
            id="Title"
            value={blog.BlogTitle}
            onChange={handleChange}
            className="mt-1 py-3 px-4 w-full rounded border-gray shadow-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Body"
            className="block text-lg font-medium text-gray-700"
          >
            Body
          </label>
          <textarea
            name="BlogContent"
            id="Body"
            rows="5"
            defaultValue={blog.BlogContent}
            onChange={handleChange}
            className="mt-1 py-3 px-4 w-full h-max-content rounded-md border-gray shadow-lg "
            required
          ></textarea>
        </div>
        <div className="flex justify-between pt-2 pb-8">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Blog
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
