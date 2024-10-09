import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleBlog, singleBlogData } from '../redux/slice/blogSlice'
import { useParams } from 'react-router-dom'
import image1 from "../assests/blogImage1.jpg"

const Singleblog = () => {
     const dispatch=useDispatch()
     const blogData=useSelector(singleBlogData)
     const {id}=useParams()
     console.log(blogData,"blogData")

     useEffect(()=>{
      if(id){

        dispatch(fetchSingleBlog(id))
      }
     },[dispatch,id])

  return (

    <div  className=" flex justify-center">
   <div className='p-4 mt-10 px-10 mx-10 w-[40%]'>

    <h2 className="font-semibold text-lg text-secondary">{blogData.title}</h2>
    <p>Published by User {blogData.userId}</p>
    <div className='mt-5'>
      <img src={image1} alt="" />
    </div>
    <p className="mt-5">{blogData.body}</p>
   </div>
    </div>
  )
}

export default Singleblog
