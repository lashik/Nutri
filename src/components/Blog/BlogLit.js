// BlogList.js
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../firebase"; // Ensure you have Firebase initialized
import sytle2 from "./bloglist.module.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
const BlogLis = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const blogsRef = ref(db, "Blog/blogs");

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
  }, []);

  return (
    <div className={sytle2.box_card}>
      {blogs.map((blog) => (
        <div key={blog.id} className={sytle2.yellow_box}>
          <Link to={`/blog/view/${blog.id}`}>
            <div className={sytle2.blog_card}>
              <div className={sytle2.title}>{blog.BlogTitle}</div>
              <div className={sytle2.content}>
                <p className={sytle2.clamp_two_lines}>{blog.BlogContent}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogLis;
