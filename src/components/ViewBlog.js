import React, { useState, useEffect } from 'react';

import { getDatabase, ref, get, update, remove } from 'firebase/database';
import app from '../firebase';
import { useParams, useNavigate } from 'react-router-dom';

import sytle2 from './view.module.scss'
const db = getDatabase(app);

const ViewBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({ BlogTitle: '', BlogContent: ''  });

    useEffect(() => {
        const fetchBlog = async () => {
            const blogRef = ref(db, `Blog/blogs/${id}`);
            const snapshot = await get(blogRef);
            if (snapshot.exists()) {
                setBlog(snapshot.val());
            } else {
                console.log("No such blog!");
                navigate('/admin'); // Redirect if blog not found
            }
        };

        fetchBlog();
    }, [id, navigate]);


    return (
        
      
            <div  className={sytle2.yellow_box}>
                
                <div className={sytle2.blog_card}>
                    <div className={sytle2.title}>
                    {blog.BlogTitle}</div>
                <div className={sytle2.content}><p>{blog.BlogContent}</p></div></div>
            </div>
      
   
    );
};

export default ViewBlog;