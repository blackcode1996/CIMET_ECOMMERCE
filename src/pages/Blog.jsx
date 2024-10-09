import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogData, fetchBlog } from '../redux/slice/blogSlice'

const Blog = () => {
  const dispatch = useDispatch()
  const blog = useSelector(blogData)

  useEffect(() => {
    dispatch(fetchBlog())
  }, [dispatch])


  return (
    <div>
      {blog.map((ele) => (
        <div>{ele.id}</div>
      ))}
    </div>
  )
}

export default Blog
