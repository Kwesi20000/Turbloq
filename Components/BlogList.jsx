import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogItems from './BlogItems';

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from the server
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  // Fetch blogs when component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs based on selected category
  const filteredBlogs = menu === "All" ? blogs : blogs.filter(blog => blog.category === menu);

  return (
    <div className='p-5'>
      {/* Category Menu */}
      <div className='flex justify-center gap-6 my-10'>
        {['All', 'Technology', 'Startup', 'Lifestyle'].map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={`py-2 px-4 rounded ${menu === category ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className='flex flex-wrap justify-around gap-4 mb-16 xl:mx-24'>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
            <BlogItems
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))
        ) : (
          <p className='text-center w-full text-lg'>No blogs available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
