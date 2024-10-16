import React, { useState, useEffect } from 'react';

import { getDatabase, ref, get, update, remove } from 'firebase/database';
import app from '../firebase';
import { useParams, useNavigate } from 'react-router-dom';

const db = getDatabase(app);

const EditBlog = () => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog(prevBlog => ({
            ...prevBlog,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blogRef = ref(db, `Blog/blogs/${id}`);
        await update(blogRef, blog);
        navigate('/admin');
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            const blogRef = ref(db, `Blog/blogs/${id}`);
            await remove(blogRef);
            navigate('/admin');
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Edit Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="Title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="BlogTitle"
                        id="Title"
                        value={blog.BlogTitle}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="Body" className="block text-sm font-medium text-gray-700">Body</label>
                    <textarea
                        name="BlogContent"
                        id="Body"
                        rows="5"
                        defaultValue={blog.BlogContent}
                        onChange={handleChange}
                        className="mt-1 block w-full h-max-content rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Update Blog
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Delete Blog
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditBlog;