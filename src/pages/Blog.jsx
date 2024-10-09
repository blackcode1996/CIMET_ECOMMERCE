import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogData, fetchBlog } from '../redux/slice/blogSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { trimText } from '../utils/common';

const Blog = () => {
  const dispatch = useDispatch();
  const blog = useSelector(blogData);
  const navigate = useNavigate();
  let location = useLocation();

  
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  
  const findPage = () => {
    const page = location.search.split("=");
    const pageNumber = Number(page[1]);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    findPage();
  }, [location]);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`); 
  };

 
  const totalPages = Math.ceil(blog.length / postsPerPage);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blog.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <div className="p-4 border rounded shadow-md h-44 ">
              <h2 className="font-semibold text-lg">{trimText(post.title,8)}</h2>
              <p className="mt-2 truncate-2-lines">{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        
        handlePagination={handlePagination}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Blog;
