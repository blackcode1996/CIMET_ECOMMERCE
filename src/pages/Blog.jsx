import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogData, fetchBlog } from '../redux/slice/blogSlice'
import { Link, useLocation } from 'react-router-dom'

const Blog = () => {
  const dispatch=useDispatch()
  const blog=useSelector(blogData)

  console.log(blog,"blog")

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  let location = useLocation();

  const totalPages = Math.ceil(blog.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const findPage = () => {
    const page = location.search.split("=");
    const pageNumber = Number(page[1]);
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    findPage();
    console.log(location,"location");
    
  }, [location]);
  
useEffect(()=>{
   dispatch(fetchBlog())
},[dispatch])


  return (

    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {blog.map((post) => (
        <Link to={`/blogs/${post.id}`}>
          <div key={post.id} className="p-4 border rounded shadow-md">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="mt-2">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-4 flex justify-center mb-10">
      {Array.from({ length: totalPages }, (_, index) => (
        <Link to={`?page=${index + 1}`}>
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-sky-900 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        </Link>
      ))}
      </div>
      </div>

    
  )
}

export default Blog
