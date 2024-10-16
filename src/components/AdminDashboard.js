import React, { useState} from 'react';

import app from '../firebase'
// import { db ,database} from '../firebase';

import { getDatabase, ref, set, push} from "firebase/database";
import Bloglist from './BlogList';
function AdminDashboard() {

  const [newBlog, setBlog] = useState({ BlogTitle: '', BlogContent: '' });
  const handleCreateBlog = async () => {
    // Logic to create a new blog
    const db = getDatabase(app);
    const newDocref = push(ref(db,"Blog/blogs"));
    set(newDocref,{
      BlogTitle: newBlog.BlogTitle,
      BlogContent: newBlog.BlogContent
    }).then(()=>{
      alert("Blog created successfully")
    }).catch((error) =>{
      alert("error: ",error.message);
    })
  }
      const handleChange = (e) => {
          const { name, value } = e.target;
          setBlog(prevBlog => ({
              ...prevBlog,
              [name]: value
          }));
      };



  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <Bloglist/>
      
      <div className="create-blog">
        <h2>Create New Blog</h2>
        {/* Form to create a new blog */}
        <form onSubmit={handleCreateBlog}>
        <input
                        type="text"
                        name="BlogTitle"
                        id="Title"
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                        required
                    />
          <textarea  type="text"
                        name="BlogContent"
                        id="Title"
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                        required></textarea>
          <button type="submit">Create Blog</button>
        </form>
      </div>
    </div>
  );
}



export default AdminDashboard;
