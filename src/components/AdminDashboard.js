import React, { useState } from "react";

import app from "../firebase";
// import { db ,database} from '../firebase';

import { getDatabase, ref, set, push } from "firebase/database";
import Bloglist from "./BlogList";
function AdminDashboard() {
  const [newBlog, setBlog] = useState({ BlogTitle: "", BlogContent: "" });
  const handleCreateBlog = async () => {
    // Logic to create a new blog
    const db = getDatabase(app);
    const newDocref = push(ref(db, "Blog/blogs"));
    set(newDocref, {
      BlogTitle: newBlog.BlogTitle,
      BlogContent: newBlog.BlogContent,
    })
      .then(() => {
        alert("Blog created successfully");
      })
      .catch((error) => {
        alert("error: ", error.message);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Bloglist />

      <div className="flex flex-col items-center mt-10 w-full">
        <h2 className="text-4xl font-semibold mb-10">Create New Blog</h2>
        <div className="border rounded-xl shadow-lg w-3/4 p-20 bg-[#629584]">
          <form onSubmit={handleCreateBlog}>
            <div>
              <h2 className="text-xl mb-3 text-white">Blog Title</h2>
              <input
                type="text"
                name="BlogTitle"
                id="Title"
                onChange={handleChange}
                className="mt-1 w-full rounded-md border shadow px-5 h-14 text-black"
                required
              />
            </div>

            <div>
              <h2 className="text-xl mt-8 mb-3 text-white">Blog Content</h2>
              <textarea
                type="text"
                name="BlogContent"
                id="Title"
                onChange={handleChange}
                className="mt-1 w-full rounded-md border shadow px-5 py-3 h-14 text-black"
                required
              />
            </div>
            <button
              className="bg-[#243642] text-white py-3 px-20 rounded-lg mt-14 ml-[30%] md:ml-[40%]"
              type="submit"
            >
              Create Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
