import React, { useState, useEffect } from 'react';
import styles from './adminDashboard.module.scss';
import app from '../firebase'
// import { db ,database} from '../firebase';

import { getDatabase, ref, get, set, push} from "firebase/database";
import Bloglist from './BlogList';
function AdminDashboard() {
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const handleCreateBlog = async () => {
    // Logic to create a new blog
    const db = getDatabase(app);
    const newDocref = push(ref(db,"Blog/blogs"));
    set(newDocref,{
      BlogTitle: newBlog.title,
      BlogContent: newBlog.content
    }).then(()=>{
      alert("Blog created successfully")
    }).catch((error) =>{
      alert("error: ",error.message);
    })
  }



  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <Bloglist/>
      
      <div className="create-blog">
        <h2>Create New Blog</h2>
        {/* Form to create a new blog */}
        <form onSubmit={handleCreateBlog}>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Content"></textarea>
          <button type="submit">Create Blog</button>
        </form>
      </div>
    </div>
  );
}



export default AdminDashboard;
