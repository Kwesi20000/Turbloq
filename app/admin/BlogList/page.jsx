'use client';
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem';
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
    } catch (err) {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteBlog = async (mongoId) => {
    try {
      const response = await axios.delete('/api/blog', {
        params: {
          id: mongoId
        }
      });
      toast.success(response.data.msg);
      fetchBlogs();
    } catch (err) {
      toast.error('Failed to delete blog');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Blogs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className='relative h-[100vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='hidden sm:block px-6 py-3'>
                  Author Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Blog Title
                </th>
                <th scope='col' className='px-6 py-3'>
                  Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((item, index) => (
                <BlogTableItem
                  key={item._id}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  date={item.date}
                  deleteBlog={deleteBlog}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Page;
